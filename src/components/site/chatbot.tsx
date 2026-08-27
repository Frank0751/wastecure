"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Loader2,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ChatMsg = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const GREETING =
  "Hello! I'm the WasteCure assistant. Ask me about our services, pickup, recycling, or sustainability.";

const QUICK_PROMPTS = [
  "What services do you offer?",
  "How do I request a pickup?",
  "Where do you operate?",
  "What plastics do you accept?",
];

// Contextual follow-ups shown after an assistant reply to guide the conversation.
const FOLLOW_UPS: { keywords: string[]; suggestions: string[] }[] = [
  {
    keywords: ["pickup", "collect", "schedule", "request"],
    suggestions: [
      "What are your collection hours?",
      "Do you charge for pickup?",
      "Can my business get regular collection?",
    ],
  },
  {
    keywords: ["service", "offer", "do you"],
    suggestions: [
      "How do I request a pickup?",
      "What plastics do you accept?",
      "Do you offer consultancy for schools?",
    ],
  },
  {
    keywords: ["plastic", "accept", "pet", "hdpe", "ldpe", "recycle"],
    suggestions: [
      "Where do you operate?",
      "What happens to the plastic after collection?",
      "How do I request a pickup?",
    ],
  },
  {
    keywords: ["operate", "area", "where", "location", "kumasi", "kwabre"],
    suggestions: [
      "What services do you offer?",
      "How do I request a pickup?",
      "Can my community get involved?",
    ],
  },
  {
    keywords: ["price", "cost", "charge", "fee", "pay"],
    suggestions: [
      "How do I request a pickup?",
      "Can my business get regular collection?",
      "How can my community get involved?",
    ],
  },
  {
    keywords: ["community", "school", "involved", "education", "clean"],
    suggestions: [
      "What services do you offer?",
      "Do you offer consultancy for schools?",
      "How do I contact your team?",
    ],
  },
];

const DEFAULT_FOLLOW_UPS = [
  "How do I request a pickup?",
  "What services do you offer?",
  "How can my community get involved?",
];

function suggestFollowUps(lastReply: string): string[] {
  const lower = lastReply.toLowerCase();
  for (const rule of FOLLOW_UPS) {
    if (rule.keywords.some((k) => lower.includes(k))) {
      return rule.suggestions;
    }
  }
  return DEFAULT_FOLLOW_UPS;
}

function uid() {
  return Math.random().toString(36).slice(2, 11);
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMsg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [bumped, setBumped] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Greeting on first open
  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ id: uid(), role: "assistant", content: GREETING }]);
    }
  }, [open, messages.length]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Pulse badge to draw attention after a delay
  useEffect(() => {
    const t = setTimeout(() => setBumped(true), 4500);
    return () => clearTimeout(t);
  }, []);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const userMsg: ChatMsg = { id: uid(), role: "user", content: trimmed };
    const history = messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role, content: m.content }));
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Insert an empty assistant message that we will stream into.
    const assistantId = uid();
    setMessages((prev) => [
      ...prev,
      { id: assistantId, role: "assistant", content: "" },
    ]);

    try {
      const res = await fetch("/api/chat-stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history }),
      });

      if (!res.ok || !res.body) {
        throw new Error("Stream request failed");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let acc = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        // SSE events are separated by \n\n
        const events = buffer.split("\n\n");
        buffer = events.pop() || "";

        for (const evt of events) {
          const line = evt.trim();
          if (!line.startsWith("data:")) continue;
          const payload = line.slice(5).trim();
          if (!payload) continue;
          try {
            const json = JSON.parse(payload);
            if (json.type === "delta" && json.content) {
              acc += json.content;
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantId ? { ...m, content: acc } : m
                )
              );
            }
          } catch {
            /* ignore malformed */
          }
        }
      }

      // If nothing streamed, show a fallback
      if (!acc.trim()) {
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  content:
                    "Sorry, I couldn't respond right now. Please call us on 0540652347 or use the contact form.",
                }
              : m
          )
        );
      }
    } catch (err) {
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? {
                ...m,
                content:
                  "I'm having trouble connecting. Please try again or call us on 0540652347.",
              }
            : m
        )
      );
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setMessages([{ id: uid(), role: "assistant", content: GREETING }]);
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="fab"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => {
              setOpen(true);
              setBumped(false);
            }}
            aria-label="Open WasteCure chat assistant"
            className={cn(
              "fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl ring-4 ring-background hover:bg-primary/90 transition-colors",
              bumped && "animate-bounce"
            )}
          >
            <MessageCircle className="size-6" />
            <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-leaf-500 text-[10px] font-bold text-white ring-2 ring-background">
              1
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-5 right-5 z-50 flex h-[560px] max-h-[calc(100dvh-2.5rem)] w-[calc(100%-2.5rem)] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 bg-gradient-to-br from-forest-700 to-forest-900 p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Sparkles className="size-5 text-leaf-400" />
                  <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-leaf-400 ring-2 ring-forest-800" />
                </div>
                <div>
                  <div className="text-sm font-semibold leading-tight">
                    WasteCure Assistant
                  </div>
                  <div className="text-xs text-forest-100/70">
                    Online · replies instantly
                  </div>
                </div>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={reset}
                  aria-label="Reset conversation"
                  className="flex size-8 items-center justify-center rounded-full text-forest-100/80 hover:bg-white/10 transition"
                >
                  <RotateCcw className="size-4" />
                </button>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="flex size-8 items-center justify-center rounded-full text-forest-100/80 hover:bg-white/10 transition"
                >
                  <X className="size-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto bg-muted/30 p-4"
            >
              {messages.map((m) => {
                // While an assistant message is streaming and still empty,
                // show the typing dots inside its bubble instead of the text.
                const isStreamingEmpty =
                  loading &&
                  m.role === "assistant" &&
                  m.id === messages[messages.length - 1]?.id &&
                  !m.content;
                return (
                  <div
                    key={m.id}
                    className={cn(
                      "flex",
                      m.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm",
                        m.role === "user"
                          ? "rounded-br-sm bg-primary text-primary-foreground"
                          : "rounded-bl-sm bg-card text-card-foreground border border-border"
                      )}
                    >
                      {isStreamingEmpty ? (
                        <div className="flex items-center gap-1.5 py-0.5">
                          <span className="size-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.3s]" />
                          <span className="size-2 animate-bounce rounded-full bg-muted-foreground/50 [animation-delay:-0.15s]" />
                          <span className="size-2 animate-bounce rounded-full bg-muted-foreground/50" />
                        </div>
                      ) : (
                        <span className="whitespace-pre-wrap">{m.content}</span>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Quick prompts (when only greeting) */}
              {messages.length === 1 && !loading && (
                <div className="pt-2">
                  <p className="mb-2 text-xs text-muted-foreground">
                    Quick questions:
                  </p>
                  <div className="flex flex-col gap-2">
                    {QUICK_PROMPTS.map((q) => (
                      <button
                        key={q}
                        onClick={() => send(q)}
                        className="rounded-lg border border-border bg-card px-3 py-2 text-left text-xs text-foreground/80 hover:border-primary/40 hover:bg-primary/5 transition"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Contextual follow-ups after the latest assistant reply */}
              {!loading &&
                messages.length > 1 &&
                messages[messages.length - 1].role === "assistant" && (
                  <div className="pt-1">
                    <div className="flex flex-wrap gap-2">
                      {suggestFollowUps(
                        messages[messages.length - 1].content
                      ).map((q) => (
                        <button
                          key={q}
                          onClick={() => send(q)}
                          className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-left text-xs text-foreground/80 hover:border-primary/50 hover:bg-primary/10 transition"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-border bg-card p-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about services, pickup, recycling..."
                className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/15 placeholder:text-muted-foreground/70"
                disabled={loading}
              />
              <Button
                type="submit"
                size="icon"
                disabled={loading || !input.trim()}
                className="rounded-full"
                aria-label="Send message"
              >
                {loading ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <Send className="size-4" />
                )}
              </Button>
            </form>
            <p className="bg-card px-3 pb-2 text-center text-[10px] text-muted-foreground">
              Powered by WasteCure AI · For bookings, use the contact form
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Zadejte prosím jméno"),
  email: z.string().email("Neplatná emailová adresa"),
  phone: z.string().optional(),
  message: z.string().min(10, "Zpráva musí mít alespoň 10 znaků"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl border text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors ${
      hasError
        ? "border-red-300 bg-red-50"
        : "border-gray-200 bg-white hover:border-gray-300"
    }`;

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={28} className="text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">Zpráva odeslána!</h3>
        <p className="text-gray-500 text-sm mb-6">
          Brzy se vám ozveme. Obvykle odpovídáme do 24 hodin.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-orange-600 hover:text-orange-700 font-medium text-sm"
        >
          Odeslat další zprávu
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Jméno a příjmení *
        </label>
        <input
          {...register("name")}
          placeholder="Jan Novák"
          className={inputClass(!!errors.name)}
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Email *
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="jan@email.cz"
          className={inputClass(!!errors.email)}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Telefon
        </label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="+420 123 456 789"
          className={inputClass(false)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Zpráva *
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="O jaký vůz máte zájem? Nebo nám napište jakýkoliv dotaz..."
          className={inputClass(!!errors.message)}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm">
          <AlertCircle size={16} />
          Nepodařilo se odeslat zprávu. Zkuste to prosím znovu nebo nás kontaktujte telefonicky.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors"
      >
        {status === "sending" ? (
          <>
            <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            Odesílám...
          </>
        ) : (
          <>
            <Send size={16} />
            Odeslat zprávu
          </>
        )}
      </button>
    </form>
  );
}

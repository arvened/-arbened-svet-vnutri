'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-[#0f0f1e] text-[#ffffff]">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-b from-[#0f0f1e] to-[#1a1a2e]">
        <div className="max-w-3xl text-center slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            СВЕТ ВНУТРИ
          </h1>
          <p className="text-xl md:text-2xl text-[#e8e8e8] mb-4">
            Light Within
          </p>
          <p className="text-lg text-[#e8e8e8] mb-12 max-w-2xl mx-auto">
            Честный разговор про тело, удовольствие и свободу.
            Интерактивная игра о самопознании.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/auth/signup"
              className="px-8 py-4 bg-[#d4af37] text-[#0f0f1e] font-bold rounded-lg hover:opacity-80 transition-opacity text-lg"
            >
              Начать игру
            </Link>
            <Link
              href="#how"
              className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-bold rounded-lg hover:bg-[#d4af37] hover:text-[#0f0f1e] transition-all text-lg"
            >
              Узнать больше
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-20 px-4 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#d4af37]">
            Как это работает
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center fade-in">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#d4af37] flex items-center justify-center text-[#0f0f1e] font-bold text-2xl">
                  1
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Выбери архетип</h3>
              <p className="text-[#e8e8e8]">
                Определи, кто ты: Искатель, Мудрец, Любовник или Правитель.
                Это основа твоего пути.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#d4af37] flex items-center justify-center text-[#0f0f1e] font-bold text-2xl">
                  2
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Пройди игру</h3>
              <p className="text-[#e8e8e8]">
                7 сцен глубокого погружения в вопросы о теле,
                стыде, желании и граничах.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full bg-[#d4af37] flex items-center justify-center text-[#0f0f1e] font-bold text-2xl">
                  3
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Получи манифест</h3>
              <p className="text-[#e8e8e8]">
                AI создаст персональный манифест свободы,
                основанный на твоих выборах.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-t from-[#0f0f1e] to-[#1a1a2e]">
        <div className="max-w-3xl mx-auto text-center slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Готов к разговору?
          </h2>
          <p className="text-lg text-[#e8e8e8] mb-12">
            Начни свой путь самопознания прямо сейчас.
          </p>
          <Link
            href="/auth/signup"
            className="inline-block px-10 py-5 bg-[#d4af37] text-[#0f0f1e] font-bold rounded-lg hover:opacity-80 transition-opacity text-lg"
          >
            Играть сейчас
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#0f0f1e] border-t border-[#d4af37]">
        <div className="max-w-5xl mx-auto text-center text-[#e8e8e8]">
          <p>СВЕТ ВНУТРИ © 2026 | Created with honesty</p>
        </div>
      </footer>
    </main>
  )
}

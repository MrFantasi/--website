import React from "react";

// SURODIN Whitepaper Website (Single-file React component)
// - Tailwind CSS utility classes are used for styling
// - Default export component
// - Replace any placeholder links/images as needed

export default function SurodinWhitepaperSite() {
  const pdfUrl = "sandbox:/mnt/data/whitepaper_surodin.pdf"; // change if hosted elsewhere

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-gradient-to-r from-yellow-50 via-orange-50 to-yellow-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-yellow-200 flex items-center justify-center text-xl font-bold">SU</div>
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight">SURODIN</h1>
              <p className="text-sm text-gray-600">Meme coin · Tribute &amp; Community Rescue</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#whitepaper" className="hover:underline">Whitepaper</a>
            <a href="#tokenomics" className="hover:underline">Tokenomics</a>
            <a href="#roadmap" className="hover:underline">Roadmap</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a
              href={pdfUrl}
              className="ml-4 inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 rounded-xl text-sm font-medium shadow-sm hover:brightness-95"
              target="_blank"
              rel="noreferrer"
            >
              Download PDF
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold leading-tight">SURODIN — Meme Coin Tribute</h2>
            <p className="mt-4 text-gray-700">Token tribute untuk mengenang Simbah Surodin; proyek komunitas yang bertujuan menggalang dana untuk menyelamatkan tanah warisan dan mengabadikan kisahnya di blockchain.</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-5 py-3 bg-yellow-500 rounded-full text-white font-semibold shadow"
              >
                Download Whitepaper (PDF)
              </a>

              <a
                href="#roadmap"
                className="inline-block px-5 py-3 border rounded-full text-gray-800 font-medium"
              >
                Lihat Roadmap
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-xs uppercase text-gray-500">Ticker</div>
                <div className="font-semibold mt-1">SURODIN</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <div className="text-xs uppercase text-gray-500">Chain (Recommended)</div>
                <div className="font-semibold mt-1">Solana (Pum Fund)</div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-sm">
            <h3 className="text-lg font-semibold">Quick Summary</h3>
            <p className="mt-3 text-gray-700 text-sm">SURODIN adalah meme coin yang lahir dari kisah nyata seorang kakek yang terlupakan. Tujuan awal: menggalang dana untuk membeli kembali tanah warisan yang dilelang oleh keluarga tak bertanggung jawab. Proyek komunitas — transparan, emosional, dan storytelling-driven.</p>

            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-50 p-3 rounded">
                <dt className="text-xs text-gray-500">Supply</dt>
                <dd className="font-medium">To be defined</dd>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <dt className="text-xs text-gray-500">Launch Method</dt>
                <dd className="font-medium">Pum Fund / Bonding Curve</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="about" className="mt-14">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold">About SURODIN</h3>
            <p className="mt-4 text-gray-700">Surodin adalah proyek yang memadukan meme culture dengan kisah nyata. Tujuan proyek ini bukan sekadar profit — melainkan aksi sosial dan memorialisasi. Seluruh komunikasi bersifat transparan, dan dana akan diarahkan sesuai tujuan proyek yang diumumkan pada whitepaper.</p>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="p-4 border rounded">
                <h4 className="font-semibold">Motivation</h4>
                <p className="text-sm text-gray-600 mt-2">Mengumpulkan dana untuk menebus tanah warisan.</p>
              </div>
              <div className="p-4 border rounded">
                <h4 className="font-semibold">Community</h4>
                <p className="text-sm text-gray-600 mt-2">Komunitas adalah inti proyek; meme, art, dan cerita akan dibentuk bersama.</p>
              </div>
              <div className="p-4 border rounded">
                <h4 className="font-semibold">Legacy</h4>
                <p className="text-sm text-gray-600 mt-2">Mengabadikan kisah Surodin di website dan dokumentasi blockchain.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="whitepaper" className="mt-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold">Whitepaper</h3>
            <p className="mt-3 text-gray-700">Versi PDF whitepaper SURODIN tersedia untuk diunduh. Isi whitepaper mencakup ringkasan, latar belakang, tokenomics, roadmap, dan risiko.</p>

            <div className="mt-4">
              <a href={pdfUrl} target="_blank" rel="noreferrer" className="inline-block px-4 py-2 bg-yellow-500 text-white rounded">Download PDF</a>
            </div>

            <div className="mt-6">
              <iframe
                title="Whitepaper Preview"
                src={pdfUrl}
                className="w-full h-96 border rounded"
              />
            </div>
          </div>
        </section>

        <section id="tokenomics" className="mt-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold">Tokenomics (Draft)</h3>
            <p className="mt-3 text-gray-700">Berikut contoh tokenomics sederhana. Ini dapat disesuaikan sebelum deploy.</p>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Total Supply: 1,000,000,000 SURODIN (contoh)</li>
              <li>• Launch: Bonding curve via Pum Fund</li>
              <li>• Liquidity: Otomatis, akan di-lock pada tahap listing</li>
              <li>• Dev &amp; Treasury: 0% (atau ditentukan komunitas)</li>
              <li>• Tax: 0% (taxless) — opsi dapat disesuaikan</li>
            </ul>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold">Community Pool</h4>
                <p className="text-sm text-gray-600 mt-2">Airdrops, rewards, marketing.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold">Heritage Fund</h4>
                <p className="text-sm text-gray-600 mt-2">Dana yang dialokasikan untuk menebus tanah warisan.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded">
                <h4 className="font-semibold">Liquidity</h4>
                <p className="text-sm text-gray-600 mt-2">Dipertahankan dan di-lock saat listing.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="mt-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold">Roadmap</h3>
            <ol className="mt-4 space-y-4 text-sm text-gray-700">
              <li><strong>Phase 1</strong> — Launch token &amp; build core community.</li>
              <li><strong>Phase 2</strong> — Marketing, meme drops, listing DEX.</li>
              <li><strong>Phase 3</strong> — Fundraising untuk tanah warisan.</li>
              <li><strong>Phase 4</strong> — Documenter &amp; memorial website.</li>
            </ol>
          </div>
        </section>

        <section id="contact" className="mt-12 mb-20">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-bold">Contact &amp; Updates</h3>
            <p className="mt-3 text-gray-700 text-sm">Ikuti perkembangan proyek di Twitter/X. Kamu juga bisa menghubungi tim inti melalui email atau Telegram (akan diupdate).</p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#" className="px-4 py-2 border rounded text-sm">Twitter/X</a>
              <a href="#" className="px-4 py-2 border rounded text-sm">Telegram</a>
              <a href="#" className="px-4 py-2 border rounded text-sm">Discord</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="max-w-6xl mx-auto px-6 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
          <div>© {new Date().getFullYear()} SURODIN — Tribute Meme Coin</div>
          <div className="mt-3 md:mt-0">Built with ❤️ — Community Driven</div>
        </div>
      </footer>
    </div>
  );
}

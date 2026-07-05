'use client';

const YOUTUBE_VIDEO_ID = 'g4obwVgsY5I';
const YOUTUBE_URL = `https://youtu.be/${YOUTUBE_VIDEO_ID}`;
const YOUTUBE_THUMBNAIL = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`;

export function SOutillerSection() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Text Content */}
          <div>
            <p
              className="text-xs md:text-sm font-medium text-gray-500 mb-6"
              style={{ letterSpacing: '2px', textTransform: 'uppercase' }}
            >
              S&apos;outiller
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-8 leading-tight">
              Des savoirs féministes accessibles à toutes et tous
            </h2>

            <p className="font-serif italic text-xl md:text-2xl text-gray-800 mb-8 leading-snug">
              Vidéos, analyses et décryptages pour comprendre les rapports de domination et s&apos;outiller collectivement pour lutter contre eux.
            </p>

            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              Les études sur le genre, à l&apos;avant-garde des luttes féministes, se retrouvent aujourd&apos;hui sous la menace d&apos;une censure grandissante. Dans un contexte où la fascisation de la société s&apos;intensifie, une rétention des savoirs féministes semble inévitable, et avec elle, un risque de marginalisation de ces savoirs essentiels pour les luttes sociales. Pourtant, ces savoirs ne sont pas simplement des informations : ce sont des armes intellectuelles forgées par des théoriciennes, militantes, chercheuses et sociologues, qui ont consacré leurs vies à déconstruire les systèmes de domination et à offrir des clés pour comprendre le monde dans toute sa complexité. Il est essentiel que ces voix féministes, ces savoirs situés, ne soient jamais effacés. Au contraire, cette plateforme entend les faire résonner à travers toutes les sphères de la société, partout où des idées peuvent être partagées et où des changements peuvent s&apos;opérer. Ces théories, ces analyses et ces critiques doivent circuler, se diffuser, s&apos;infiltrer dans toutes les strates de la société, car ce sont elles qui permettent d&apos;ouvrir de nouvelles perspectives, d&apos;interroger les rapports de pouvoir et d&apos;imaginer des alternatives à l&apos;ordre établi.
            </p>

            <p className="text-base text-gray-700 mb-10 leading-relaxed">
              L&apos;objectif est clair : faire éclater ces idées, les rendre accessibles à toutes celles et ceux qui aspirent à une société plus juste.
            </p>

            <a
              href="#formations"
              className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-300"
            >
              S&apos;OUTILLER
            </a>
          </div>

          {/* Right Column: Video Card */}
          <div>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block aspect-video w-full overflow-hidden bg-black"
            >
              {/* Thumbnail */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={YOUTUBE_THUMBNAIL}
                alt="Entre Elles — ELLE"
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                onError={(e) => {
                  e.currentTarget.src = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/default.jpg`;
                }}
              />

              {/* Top bar: ELLE badge */}
              <div className="absolute top-0 left-0 right-0 flex items-center bg-black/80 px-4 py-2">
                <span className="text-white font-serif italic text-sm mr-3">ELLE</span>
                <div className="flex-1 h-4 bg-white/90" />
              </div>

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-12 bg-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-700 transition-colors duration-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M9.5 8.25C9.5 7.64 10.14 7.27 10.64 7.6L16.88 11.35C17.35 11.65 17.35 12.35 16.88 12.65L10.64 16.4C10.14 16.73 9.5 16.36 9.5 15.75V8.25Z" />
                  </svg>
                </div>
              </div>

              {/* Bottom overlay: title + watch link */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-16 pb-4 px-4">
                <p className="text-white font-black text-3xl md:text-4xl tracking-tight mb-2">
                  ENTRE ELLES
                </p>
                <div className="flex items-center justify-between">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M4 12v7a1 1 0 001 1h14a1 1 0 001-1v-7M16 6l-4-4-4 4M12 2v13" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="flex items-center gap-2 text-white text-sm font-semibold">
                    Regarder sur
                    <svg width="24" height="17" viewBox="0 0 24 17">
                      <path d="M23.5 2.6a3 3 0 00-2.1-2.1C19.5 0 12 0 12 0S4.5 0 2.6.5A3 3 0 00.5 2.6 31 31 0 000 8.5a31 31 0 00.5 5.9 3 3 0 002.1 2.1C4.5 17 12 17 12 17s7.5 0 9.4-.5a3 3 0 002.1-2.1 31 31 0 00.5-5.9 31 31 0 00-.5-5.9z" fill="#FF0000" />
                      <path d="M9.5 12.1V4.9L15.8 8.5z" fill="#FFFFFF" />
                    </svg>
                    YouTube
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

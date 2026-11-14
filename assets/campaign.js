// Метка кампании: ?c=<метка> или ?ct=<метка> → ?pt=&ct= на ссылке в App Store.
// ct нужен для QR-кода в экспортированных reels, где URL уже задан как ?ct=qr_end.
// Читается в ASC → Analytics → Acquisition → Campaigns. Без этого источник установки
// приходится выводить из гео — на двух кампаниях в одной стране метод разваливается.
//
// pt (provider token) один на аккаунт, выдаётся при создании первой campaign-ссылки в ASC.
// Пока пусто — ссылки остаются нетронутыми, метка молча игнорируется.
(function () {
  const APPLE_PROVIDER_TOKEN = '127317975';
  const MAX_CT_LENGTH = 30; // лимит Apple на ct

  const params = new URLSearchParams(location.search);
  const tag = params.get('c') || params.get('ct');
  if (!APPLE_PROVIDER_TOKEN || !tag) return;
  // Метка приходит из URL — в ссылку пускаем только то, что сами же и раздаём.
  if (!new RegExp('^[a-z0-9_-]{1,' + MAX_CT_LENGTH + '}$').test(tag)) return;

  document.querySelectorAll('a[href*="apps.apple.com"]').forEach((a) => {
    const url = new URL(a.href);
    url.searchParams.set('pt', APPLE_PROVIDER_TOKEN);
    url.searchParams.set('ct', tag);
    a.href = url.toString();
  });
})();

/* ============================================================
   DEYEN · EL ORIGEN — Demo Integrado Funcional
   js/ui.js — Shell compartido (header/footer), navegación y utilidades
   ============================================================ */
(function (global) {
  'use strict';

  /* ============================================================
     Tema clara/oscura (variables CSS compartidas con Tailwind)
     ============================================================ */
  var THEME_KEY = 'deyen_theme';

  var THEMES = {
    dark: {
      'surface-dim': '19 19 22', 'on-secondary': '60 47 0', 'on-tertiary-container': '63 64 69',
      'on-secondary-fixed-variant': '87 69 0', 'secondary-fixed-dim': '233 195 73',
      'surface-container-highest': '53 52 56', 'on-surface': '228 225 230', 'tertiary-fixed-dim': '198 198 204',
      'primary-fixed-dim': '224 194 152', 'surface-tint': '224 194 152', 'secondary-fixed': '255 224 136',
      'on-primary-container': '81 61 29', 'on-background': '228 225 230', 'secondary-container': '175 141 17',
      'outline-variant': '77 70 60', 'inverse-surface': '228 225 230', 'tertiary-container': '172 172 178',
      'primary-container': '197 168 128', 'on-error-container': '255 218 214', 'on-primary': '64 45 15',
      'inverse-on-surface': '48 48 51', 'on-primary-fixed-variant': '88 67 35', 'on-tertiary-fixed': '26 27 32',
      'on-surface-variant': '209 197 184', 'on-tertiary': '47 48 53', 'error-container': '147 0 10',
      'surface-container-low': '27 27 30', 'surface-container-high': '42 42 45', 'on-secondary-container': '52 40 0',
      'on-secondary-fixed': '36 26 0', 'surface-container-lowest': '14 14 17', 'surface-variant': '53 52 56',
      'on-primary-fixed': '40 24 0', 'tertiary-fixed': '227 226 232', 'error': '255 180 171',
      'surface-bright': '57 57 60', 'outline': '153 143 131', 'primary-fixed': '254 222 178',
      'tertiary': '200 199 206', 'secondary': '233 195 73', 'primary': '226 195 153',
      'surface-container': '31 31 34', 'on-tertiary-fixed-variant': '70 70 76', 'surface': '19 19 22',
      'on-error': '105 0 5', 'inverse-primary': '114 91 56', 'background': '19 19 22'
    },
    light: {
      'surface-dim': '218 214 208', 'on-secondary': '255 255 255', 'on-tertiary-container': '33 34 39',
      'on-secondary-fixed-variant': '80 67 0', 'secondary-fixed-dim': '233 195 73',
      'surface-container-highest': '230 226 222', 'on-surface': '30 28 26', 'tertiary-fixed-dim': '198 198 204',
      'primary-fixed-dim': '224 194 152', 'surface-tint': '114 91 56', 'secondary-fixed': '242 226 124',
      'on-primary-container': '43 23 0', 'on-background': '30 28 26', 'secondary-container': '242 226 124',
      'outline-variant': '216 211 203', 'inverse-surface': '51 49 46', 'tertiary-container': '227 226 232',
      'primary-container': '233 214 179', 'on-error-container': '65 0 2', 'on-primary': '255 255 255',
      'inverse-on-surface': '244 239 234', 'on-primary-fixed-variant': '88 67 35', 'on-tertiary-fixed': '26 27 32',
      'on-surface-variant': '78 74 67', 'on-tertiary': '255 255 255', 'error-container': '255 218 214',
      'surface-container-low': '248 244 239', 'surface-container-high': '236 232 228',
      'on-secondary-container': '33 27 0', 'on-secondary-fixed': '33 27 0', 'surface-container-lowest': '255 255 255',
      'surface-variant': '225 221 214', 'on-primary-fixed': '32 21 0', 'tertiary-fixed': '227 226 232',
      'error': '186 26 26', 'surface-bright': '252 249 246', 'outline': '130 124 117',
      'primary-fixed': '243 220 179', 'tertiary': '111 111 118', 'secondary': '108 93 0',
      'primary': '114 91 56', 'surface-container': '242 238 233', 'on-tertiary-fixed-variant': '70 70 76',
      'surface': '252 248 244', 'on-error': '255 255 255', 'inverse-primary': '224 194 152', 'background': '252 248 244'
    }
  };

  function toVarCss(map) {
    var out = '';
    for (var k in map) { if (map.hasOwnProperty(k)) out += '--' + k + ':' + map[k] + ';'; }
    return out;
  }

  function applyThemeEarly() {
    var saved = null;
    try { saved = global.localStorage.getItem(THEME_KEY); } catch (e) { /* noop */ }
    var html = document.documentElement;
    html.classList.toggle('dark', saved !== 'light');

    if (!document.getElementById('deyen-theme-vars')) {
      var style = document.createElement('style');
      style.id = 'deyen-theme-vars';
      style.textContent =
        ':root{color-scheme:dark;}html:not(.dark){color-scheme:light;}' +
        'html.dark{' + toVarCss(THEMES.dark) + '}' +
        'html:not(.dark){' + toVarCss(THEMES.light) + '}'
        ;
      document.head.appendChild(style);
    }
  }

  function currentTheme() {
    try {
      return global.localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark';
    } catch (e) { return 'dark'; }
  }

  function setTheme(mode) {
    document.documentElement.classList.toggle('dark', mode !== 'light');
    try { global.localStorage.setItem(THEME_KEY, mode); } catch (e) { /* noop */ }
    var icon = document.getElementById('themeToggle');
    if (icon) icon.querySelector('.material-symbols-outlined').textContent = mode === 'light' ? 'dark_mode' : 'light_mode';
  }

  function toggleTheme() {
    setTheme(currentTheme() === 'light' ? 'dark' : 'light');
  }

  applyThemeEarly();

  var NAV = [
    { file: 'index.html', label: 'Inicio', icon: 'house' },
    { file: 'comprar-obra.html', label: 'Adquirir', icon: 'shopping_bag' },
    { file: 'lector-digital.html', label: 'Lector', icon: 'auto_stories' },
    { file: 'panel-cms.html', label: 'Panel CMS', icon: 'dashboard' }
  ];

  function currentFile() {
    return (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  }

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m];
    });
  }

  function fmtMXN(n) {
    return '$' + Number(n || 0).toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function activeClass(file, base, isActive, isInactive) {
    return file === currentFile() ? isActive : isInactive;
  }

  function headerHTML() {
    var active = currentFile();
    var links = NAV.map(function (page) {
      var state = page.file === active
        ? 'text-primary bg-surface-container-low'
        : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low/60';
      return '<a href="' + page.file + '" class="flex items-center gap-2 px-4 py-2.5 rounded font-label-sm text-label-sm uppercase tracking-widest transition-colors ' + state + '">' +
        '<span class="material-symbols-outlined text-[17px]">' + page.icon + '</span>' + page.label + '</a>';
    }).join('');

    var mobileLinks = NAV.map(function (page) {
      var state = page.file === active ? 'text-primary' : 'text-on-surface-variant hover:text-primary';
      return '<a href="' + page.file + '" class="flex items-center gap-3 px-3 py-2.5 rounded font-label-sm text-label-sm uppercase tracking-widest transition-colors ' + state + '">' +
        '<span class="material-symbols-outlined text-[18px]">' + page.icon + '</span>' + page.label + '</a>';
    }).join('');

    return (
      '<header class="sticky top-0 z-50 w-full bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/30">' +
      '<div class="max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop h-16 flex items-center justify-between gap-4">' +
      '<a href="index.html" class="flex items-center gap-3 min-w-0 group">' +
      '<img src="assets/deyen.svg" alt="DEYEN El Origen" class="h-8 w-auto shrink-0 group-hover:opacity-80 transition-opacity"/>' +
      '<span class="flex flex-col leading-none min-w-0">' +
      '<span class="font-label-md text-label-md text-on-surface uppercase tracking-[0.18em] font-semibold truncate">DEYEN</span>' +
      '<span class="text-[9px] uppercase tracking-[0.3em] text-primary">El Origen</span>' +
      '</span></a>' +
      '<nav class="hidden lg:flex items-center gap-1">' + links + '</nav>' +
      '<div class="flex items-center gap-2">' +
      '<button id="themeToggle" class="w-10 h-10 rounded flex items-center justify-center bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors" title="Cambiar tema clara/oscura" aria-label="Cambiar tema clara/oscura">' +
      '<span class="material-symbols-outlined text-[20px]">' + (currentTheme() === 'light' ? 'dark_mode' : 'light_mode') + '</span></button>' +
      '<a href="comprar-obra.html" class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded bg-primary text-on-primary hover:bg-secondary font-label-md text-label-md uppercase tracking-wider font-semibold transition-all shadow-md">' +
      '<span class="material-symbols-outlined text-[18px]">shopping_bag</span><span>Adquirir</span></a>' +
      '<button id="navToggle" class="lg:hidden w-10 h-10 rounded flex items-center justify-center bg-surface-container-low text-on-surface hover:bg-surface-container-high transition-colors" aria-label="Menú">' +
      '<span class="material-symbols-outlined">menu</span></button>' +
      '</div></div>' +
      '<div id="navMenu" class="hidden lg:hidden border-t border-outline-variant/30 bg-surface-container-lowest">' +
      '<nav class="max-w-[1440px] mx-auto px-margin py-3 flex flex-col gap-1">' + mobileLinks + '</nav>' +
      '</div></header>'
    );
  }

  function footerHTML() {
    return (
      '<footer class="w-full bg-surface-container-lowest border-t border-outline-variant/30">' +
      '<div class="max-w-[1440px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">' +
      '<div class="grid grid-cols-1 md:grid-cols-12 gap-gutter pb-space-xl">' +
      '<div class="md:col-span-5 flex flex-col gap-space-md">' +
      '<div class="flex items-center gap-space-sm"><img alt="DEYEN - El Origen Logo" class="h-6 w-auto object-contain" src="assets/deyen.svg"/>' +
      '<span class="font-headline-sm text-headline-sm text-primary uppercase tracking-wide">DEYEN</span></div>' +
      '<p class="font-body-sm text-body-sm text-on-surface-variant max-w-md">Edición canónica y portal oficial de la obra literaria \'El Origen\'. Filosofía, narrativa e inmersión intelectual editada con rigor tipográfico y encuadernación de colección.</p>' +
      '<div class="flex items-center gap-space-md pt-space-xs">' +
      '<div class="flex items-center gap-space-xs text-on-surface-variant"><span class="material-symbols-outlined text-[18px] text-primary">local_shipping</span><span class="font-label-sm text-label-sm uppercase tracking-widest">Envío Estafeta Verificado</span></div>' +
      '<div class="flex items-center gap-space-xs text-on-surface-variant"><span class="material-symbols-outlined text-[18px] text-secondary">verified_user</span><span class="font-label-sm text-label-sm uppercase tracking-widest">PayPal Protegido</span></div>' +
      '</div></div>' +
      '<div class="md:col-span-3 flex flex-col gap-space-sm">' +
      '<span class="font-label-md text-label-md text-primary uppercase tracking-widest">Navegación</span>' +
      '<ul class="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">' +
      '<li><a class="hover:text-primary transition-colors" href="index.html">Inicio del Manuscrito</a></li>' +
      '<li><a class="hover:text-primary transition-colors" href="comprar-obra.html">Adquisición y Despacho</a></li>' +
      '<li><a class="hover:text-primary transition-colors" href="lector-digital.html">Lector Web Inmersivo</a></li>' +
      '<li><a class="hover:text-primary transition-colors" href="panel-cms.html">Panel Editorial CMS</a></li>' +
      '</ul></div>' +
      '<div class="md:col-span-4 flex flex-col gap-space-sm">' +
      '<span class="font-label-md text-label-md text-primary uppercase tracking-widest">Consulado Editorial</span>' +
      '<ul class="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant">' +
      '<li class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px] text-primary">mail</span>editorial@deyen.mx</li>' +
      '<li class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px] text-primary">policy</span>Aviso de Privacidad (LFPDPPP)</li>' +
      '<li class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px] text-primary">receipt_long</span>Términos del Servicio</li>' +
      '<li class="flex items-center gap-2"><span class="material-symbols-outlined text-[16px] text-secondary">workspace_premium</span>Tirada Canónica • 2026</li>' +
      '</ul></div></div>' +
      '<div class="pt-space-md border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-space-xs font-label-sm text-label-sm text-outline">' +
      '<span>© 2026 DEYEN Editorial Sanctum. Obra registrada.</span>' +
      '<span class="flex items-center gap-1"><span class="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>Demo integrado funcional</span>' +
      '</div></div></footer>'
    );
  }

  function toastContainer() {
    var root = document.getElementById('toast-root');
    if (!root) {
      root = document.createElement('div');
      root.id = 'toast-root';
      root.className = 'fixed top-20 right-4 sm:right-6 z-[90] flex flex-col gap-2 w-[330px] max-w-[90vw]';
      document.body.appendChild(root);
    }
    return root;
  }

  function showToast(message, type) {
    var kind = type || 'success';
    var icon = kind === 'success' ? 'task_alt' : (kind === 'error' ? 'error' : 'info');
    var accent = kind === 'success' ? 'text-secondary' : (kind === 'error' ? 'text-error' : 'text-primary');
    var border = kind === 'error' ? 'border-error/40' : 'border-primary/30';

    var el = document.createElement('div');
    el.className = 'toast-item flex items-start gap-space-sm p-space-md rounded bg-surface-container-lowest border ' + border +
      ' shadow-2xl animate-[fadeup_0.3s_ease-out]';
    el.style.animation = 'fadeup 0.3s ease-out';
    el.innerHTML =
      '<span class="material-symbols-outlined text-[20px] ' + accent + ' mt-0.5">' + icon + '</span>' +
      '<p class="font-body-sm text-body-sm text-on-surface flex-1 leading-snug">' + esc(message) + '</p>' +
      '<button class="text-outline hover:text-on-surface transition-colors" onclick="this.parentElement.remove()"><span class="material-symbols-outlined text-[16px]">close</span></button>';

    toastContainer().appendChild(el);
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 5200);
  }

  function injectShell() {
    var headerHost = document.getElementById('app-header');
    var footerHost = document.getElementById('app-footer');
    if (headerHost) {
      headerHost.innerHTML = headerHTML();
      var toggle = document.getElementById('navToggle');
      var menu = document.getElementById('navMenu');
      if (toggle && menu) {
        toggle.addEventListener('click', function () {
          menu.classList.toggle('hidden');
          var icon = toggle.querySelector('.material-symbols-outlined');
          if (icon) icon.textContent = menu.classList.contains('hidden') ? 'menu' : 'close';
        });
      }
      var themeBtn = document.getElementById('themeToggle');
      if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    }
    if (footerHost) footerHost.innerHTML = footerHTML();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectShell);
  } else {
    injectShell();
  }

  global.DEYEN = global.DEYEN || {};
  global.DEYEN.ui = { esc: esc, fmtMXN: fmtMXN, showToast: showToast, currentFile: currentFile, currentTheme: currentTheme, setTheme: setTheme, toggleTheme: toggleTheme };
  global.go = function (file) { location.href = file; };
})(window);

/* Animación simple para toasts */
document.addEventListener('DOMContentLoaded', function () {
  var style = document.createElement('style');
  style.textContent = '@keyframes fadeup{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}';
  document.head.appendChild(style);
});
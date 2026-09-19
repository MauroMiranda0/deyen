/* ============================================================
   DEYEN · EL ORIGEN — Demo Integrado Funcional
   js/store.js — Capa de datos compartida (localStorage)
   ============================================================ */
(function (global) {
  'use strict';

  var KEYS = {
    catalog: 'deyen_catalog',
    orders: 'deyen_orders',
    leads: 'deyen_leads',
    reader: 'deyen_reader',
    license: 'deyen_license'
  };

  var SESSION_KEY = 'deyen_session';

  var memory = {};
  var storage = null;
  var enabled = true;
  try {
    storage = global.localStorage;
    var probe = '__deyen_probe__';
    storage.setItem(probe, '1');
    storage.removeItem(probe);
  } catch (e) {
    enabled = false;
  }

  function read(key) {
    if (enabled) {
      try {
        var raw = storage.getItem(key);
        if (raw) return JSON.parse(raw);
      } catch (e) { /* noop */ }
    }
    return memory[key] !== undefined ? memory[key] : null;
  }

  function write(key, value) {
    memory[key] = value;
    if (enabled) {
      try { storage.setItem(key, JSON.stringify(value)); } catch (e) { /* noop */ }
    }
  }

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  var MONTHS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

  function fmtDate(input) {
    var d = input ? new Date(input) : new Date();
    return pad(d.getDate()) + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear() + ' • ' +
      pad(d.getHours()) + ':' + pad(d.getMinutes());
  }

  function newOrderId() { return 'DYN-' + Math.floor(10000 + Math.random() * 89999); }
  function newGuide() { return 'EST-' + Math.floor(1000000 + Math.random() * 9000000) + 'MX'; }

  function seed() {
    if (!read(KEYS.catalog)) {
      write(KEYS.catalog, { physical: 590, digital: 350, shipping: 130, stock: 142, maxStock: 250 });
    }
    if (!read(KEYS.orders)) {
      write(KEYS.orders, [
        {
          id: 'DYN-10492', date: '2023-10-24T14:32:00',
          name: 'Valeria Sotomayor', email: 'v.sotomayor@literatura.mx', phone: '+52 55 7812 9034',
          format: 'physical', subtotal: 590, shipping: 130, total: 720,
          payment: 'PayPal Aprobado', logistics: 'en_transito', guide: 'EST-8923014MX',
          createdAt: '2025-01-10T09:00:00',
          events: [
            { title: 'Paquete Recolectado en Bodega DEYEN', place: 'Almacén Central • Ciudad de México', time: '23 Oct 2023 • 17:45 PM' },
            { title: 'En tránsito hacia Sucursal de Destino', place: 'Centro de Distribución Norte • Monterrey, N.L.', time: '24 Oct 2023 • 08:30 AM' }
          ]
        },
        {
          id: 'DYN-10493', date: '2023-10-24T15:10:00',
          name: 'Arturo Morales Díaz', email: 'a.morales@colegio.edu.mx', phone: '+52 33 4109 2287',
          format: 'physical', subtotal: 590, shipping: 130, total: 720,
          payment: 'PayPal Aprobado', logistics: 'preparacion', guide: '',
          createdAt: '2025-01-10T09:00:00',
          events: [
            { title: 'Pago verificado por PayPal', place: 'Pasarela PayPal México', time: '24 Oct 2023 • 15:10 PM' }
          ]
        },
        {
          id: 'DYN-10488', date: '2023-10-22T09:12:00',
          name: 'Camila Herrera R.', email: 'camila.h@archivo.org', phone: '+52 999 401 8821',
          format: 'physical', subtotal: 590, shipping: 130, total: 720,
          payment: 'PayPal Aprobado', logistics: 'entregado', guide: 'EST-7718902MX',
          createdAt: '2025-01-10T09:00:00',
          events: [
            { title: 'Paquete Recolectado en Bodega DEYEN', place: 'Almacén Central • Ciudad de México', time: '21 Oct 2023 • 11:20 AM' },
            { title: 'En tránsito hacia Sucursal de Destino', place: 'Centro de Distribución Sureste • Mérida, Yuc.', time: '21 Oct 2023 • 19:02 PM' },
            { title: 'Entregado al destinatario', place: 'Firma recibida por valija oficial', time: '23 Oct 2023 • 10:45 AM' }
          ]
        },
        {
          id: 'DYN-10494', date: '2023-10-24T16:44:00',
          name: 'Mateo Cárdenas', email: 'mateo@pensamientocritico.com', phone: '+52 81 2003 5517',
          format: 'digital', subtotal: 350, shipping: 0, total: 350,
          payment: 'PayPal Aprobado', logistics: 'sello_emitido', guide: 'N/A',
          createdAt: '2025-01-10T09:00:00',
          events: [
            { title: 'Watermark criptográfico estampado', place: 'Motor Brevo DRM • Acceso Web', time: '24 Oct 2023 • 16:44 PM' }
          ]
        }
      ]);
    }
    if (!read(KEYS.leads)) {
      write(KEYS.leads, [
        { name: 'Fernanda Ortiz', email: 'fernanda.ortiz@ejemplo.com', date: '2023-10-20T10:15:00', origen: 'Muestra Gratis' },
        { name: 'Héctor Prieto', email: 'hector.prieto@ejemplo.com', date: '2023-10-21T09:40:00', origen: 'Muestra Gratis' },
        { name: 'Lucía Ávila', email: 'lucia.avila@ejemplo.com', date: '2023-10-23T18:05:00', origen: 'Newsletter' },
        { name: 'Ricardo Trueba', email: 'r.trueba@ejemplo.com', date: '2023-10-24T08:12:00', origen: 'Muestra Gratis' }
      ]);
    }
    if (!read(KEYS.reader)) {
      write(KEYS.reader, { theme: 'obsidian', scale: 1, progress: 34, chapter: 0 });
    }
    if (!read(KEYS.license)) {
      write(KEYS.license, {
        name: 'Lic. Roberto Mendoza Ruiz',
        email: 'roberto.mendoza@ejemplo.com',
        id: 'DEYEN-2026-98124'
      });
    }
  }

  var Store = {
    KEYS: KEYS,
    fmtDate: fmtDate,
    newOrderId: newOrderId,
    newGuide: newGuide,

    getCatalog: function () { return read(KEYS.catalog); },
    saveCatalog: function (cat) { write(KEYS.catalog, cat); },
    setStock: function (stock) {
      var cat = read(KEYS.catalog) || {};
      cat.stock = Math.max(0, Math.min(cat.maxStock, Number(stock) || 0));
      write(KEYS.catalog, cat);
      return cat;
    },

    getOrders: function () { return read(KEYS.orders) || []; },
    addOrder: function (order) {
      var orders = read(KEYS.orders) || [];
      orders.unshift(order);
      write(KEYS.orders, orders);
      return order;
    },
    registerPurchase: function (order) {
      if (order.format === 'physical') {
        var cat = read(KEYS.catalog) || {};
        cat.stock = Math.max(0, Math.min(cat.maxStock, (Number(cat.stock) || 0) - 1));
        write(KEYS.catalog, cat);
      }
      return this.addOrder(order);
    },
    updateOrder: function (id, patch) {
      var orders = read(KEYS.orders) || [];
      for (var i = 0; i < orders.length; i++) {
        if (orders[i].id === id) {
          orders[i] = Object.assign({}, orders[i], patch);
          write(KEYS.orders, orders);
          return orders[i];
        }
      }
      return null;
    },

    getLeads: function () { return read(KEYS.leads) || []; },
    addLead: function (lead) {
      var leads = read(KEYS.leads) || [];
      leads.unshift(lead);
      write(KEYS.leads, leads);
      return lead;
    },
    leadExists: function (email) {
      var leads = read(KEYS.leads) || [];
      var orders = read(KEYS.orders) || [];
      email = String(email || '').toLowerCase().trim();
      var inLeads = leads.some(function (l) { return String(l.email).toLowerCase() === email; });
      var inOrders = orders.some(function (o) { return String(o.email).toLowerCase() === email; });
      return inLeads || inOrders;
    },

    getReader: function () { return read(KEYS.reader) || { theme: 'obsidian', scale: 1, progress: 34, chapter: 0 }; },
    setReader: function (patch) {
      var cur = read(KEYS.reader) || {};
      write(KEYS.reader, Object.assign({}, cur, patch));
      return read(KEYS.reader);
    },

    getLicense: function () { return read(KEYS.license); },
    setLicense: function (license) { write(KEYS.license, license); },

    getSession: function () { return read(SESSION_KEY); },
    setSession: function (session) { write(SESSION_KEY, session); },
    clearSession: function () {
      memory[SESSION_KEY] = undefined;
      if (enabled) { try { storage.removeItem(SESSION_KEY); } catch (e) { /* noop */ } }
    },

    resetDemo: function () {
      Object.keys(KEYS).forEach(function (k) {
        memory[KEYS[k]] = undefined;
        if (enabled) { try { storage.removeItem(KEYS[k]); } catch (e) { /* noop */ } }
      });
      seed();
    }
  };

  seed();
  global.DEYEN = global.DEYEN || {};
  global.DEYEN.Store = Store;
})(window);
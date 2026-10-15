(function () {
  "use strict";
  var SAMPLES = {"short":[{"id":"c1378","prompt":"","steps":1.51,"fps4":26.4,"fps":38.2,"speed":1.45},{"id":"c1635","prompt":"","steps":1.69,"fps4":26.5,"fps":39.2,"speed":1.48},{"id":"c3319","prompt":"","steps":1.54,"fps4":26.2,"fps":39.9,"speed":1.52},{"id":"c381","prompt":"","steps":1.73,"fps4":25.0,"fps":33.8,"speed":1.35},{"id":"c3115","prompt":"","steps":2.46,"fps4":26.3,"fps":34.7,"speed":1.32},{"id":"c2923","prompt":"","steps":2.27,"fps4":26.2,"fps":36.2,"speed":1.38},{"id":"c1213","prompt":"","steps":2.22,"fps4":26.5,"fps":35.3,"speed":1.33}],"long":[{"id":"p193","prompt":"A middle-aged man smoking on a worn leather sofa in a dim room","steps":1.84,"fps4":24.5,"fps":37.3,"speed":1.51},{"id":"p359","prompt":"A skier in a red jacket carving down a snowy slope","steps":2.38,"fps4":24.5,"fps":32.9,"speed":1.33},{"id":"p328","prompt":"A giraffe sprinting toward its herd across the savanna","steps":2.47,"fps4":24.5,"fps":32.1,"speed":1.31},{"id":"p661","prompt":"A couple in evening wear walking with umbrellas through night rain","steps":2.99,"fps4":24.5,"fps":29.4,"speed":1.19},{"id":"p217","prompt":"A jogger on a park trail lined with trees and flowers","steps":2.69,"fps4":24.5,"fps":31.2,"speed":1.26},{"id":"p444","prompt":"A close-up of a purple umbrella with intricate stitching","steps":1.11,"fps4":24.5,"fps":41.6,"speed":1.69},{"id":"p723","prompt":"Colourful ink droplets swirling through clear water in slow motion","steps":3.12,"fps4":24.5,"fps":28.6,"speed":1.16}],"world":[{"id":"b58","prompt":"A whimsical fantasy castle courtyard with intricate stone arches, ivy-covered walls, and a central fountain spouting crystal-clear water.","steps":2.58,"fps4":18.0,"fps":23.8,"speed":1.32,"actions":["W","A","left","right","left"],"full":"A whimsical fantasy castle courtyard with intricate stone arches, ivy-covered walls, and a central fountain spouting crystal-clear water. The courtyard is surrounded by tall towers adorned with stained-glass windows and fluttering banners. To the left, a cobblestone path leads to a spiral staircase covered in moss. To the right, a small garden with fairy lamps and flower beds. In the distance, a grand hall entrance with a large wooden door. Soft, warm sunlight filters through the stained-glass, casting colorful patterns across the ground. First-person viewer. First-person view from the center of the courtyard, looking up at the castle walls with sunlight filtering through the stained-glass windows."},{"id":"b138","prompt":"A cozy apartment kitchen in a cheerful comic book style with bright colors and exaggerated lines.","steps":2.12,"fps4":17.2,"fps":26.3,"speed":1.53,"actions":["stop","W","A","S","left"],"full":"A cozy apartment kitchen in a cheerful comic book style with bright colors and exaggerated lines. A clean white countertop with a stack of colorful cookbooks and a set of mismatched ceramic mugs. A vibrant red refrigerator and a large green appliance that looks like a futuristic oven. Pots and pans hanging from a wooden rod above the stove. A small table with a drawing pad and pencils. Behind the viewer, a brightly painted mural on the adjacent wall depicts a bustling cityscape. To the left, a door leading to the living room. On the right, a window showing a glimpse of a lively street with people walking and a colorful sign reading 'Café Bliss'. First-person viewer. First-person point of view standing in the kitchen, looking around at the colorful and detailed surroundings."},{"id":"b156","prompt":"A cozy living room with plush velvet armchairs and a grand fireplace in the center.","steps":2.32,"fps4":18.1,"fps":26.2,"speed":1.45,"actions":["S","W","S","D","S"],"full":"A cozy living room with plush velvet armchairs and a grand fireplace in the center. The mantelpiece above the fireplace holds a collection of old clocks, each with a different design. Large windows on the left overlook a peaceful garden filled with blooming flowers and gently swaying trees. A wooden coffee table sits in front of a comfortable-looking sofa. The overall lighting is warm, with the glow of a firelight and some soft, ambient lighting from wall sconces casting shadows. The scene has a painterly, almost watercolor-like quality, emphasizing texture and light. First-person viewer. First-person view from the seated position on the sofa, looking forward towards the fireplace."},{"id":"b100","prompt":"A cozy interior kitchen with dark wood cabinets lining one wall, contrasting with white appliances and granite countertops.","steps":2.08,"fps4":18.1,"fps":27.2,"speed":1.5,"actions":["stop","W","right","W","left"],"full":"A cozy interior kitchen with dark wood cabinets lining one wall, contrasting with white appliances and granite countertops. A large island in the center has a mix of cooking utensils and fresh fruit. The room is filled with natural light from a sunlit window on the left, casting a warm glow on the kitchen sink and stove. Soft shadows define the edges of the furniture and countertops. Behind the viewer, a door leads to the dining area, and to the right, a small table with chairs sits under a decorative light fixture. First-person viewer. First-person perspective, head-height camera looking out from the kitchen, capturing the warm, inviting atmosphere."},{"id":"b128","prompt":"A fantastical workspace with intricate wooden carvings adorning the walls and ceiling, forming a labyrinthine network of shelves and alcoves filled with glowing artifacts and magical tomes.","steps":2.25,"fps4":18.1,"fps":26.4,"speed":1.46,"actions":["D","W","stop","right","A"],"full":"A fantastical workspace with intricate wooden carvings adorning the walls and ceiling, forming a labyrinthine network of shelves and alcoves filled with glowing artifacts and magical tomes. Sunlight filters through stained glass windows, casting a warm, ethereal glow on everything. A large, ornate desk with a leather-bound scroll sits in the center, and an array of magical instruments and glowing crystals are scattered about. The air is thick with the scent of aged parchment and mystical incense. Stylized 3D game art with bold colors and clean lines, evoking a vibrant and magical world. First-person viewer. First-person POV at eye level, showing the ornate desk and surrounding magical artifacts from a seated position."},{"id":"b174","prompt":"A dimly lit stone-floored temple hall with high vaulted ceilings adorned with intricate carvings.","steps":2.42,"fps4":17.1,"fps":25.3,"speed":1.47,"actions":["left","W","A","right","A"],"full":"A dimly lit stone-floored temple hall with high vaulted ceilings adorned with intricate carvings. Incense burners placed along the perimeter emit wisps of smoke, and flickering oil lamps cast a warm, golden glow. Ahead, a large wooden door with a brass handle is partially open, revealing a staircase leading up to an upper chamber. To the left, a row of wooden benches lined with prayer flags, and to the right, a statue of a bodhisattva standing regally. The air is heavy with the scent of incense and woodsmoke, and the distant chanting of monks can be heard from another part of the temple. First-person viewer. First-person view at eye level, looking around the temple hall, where the viewer is positioned near the incense burners."},{"id":"b173","prompt":"A bustling fantasy market square under a vibrant cerulean sky.","steps":2.78,"fps4":17.3,"fps":23.4,"speed":1.35,"actions":["left","D","stop","D","left"],"full":"A bustling fantasy market square under a vibrant cerulean sky. Stalls are adorned with intricate carvings and colorful fabrics, selling potions, enchanted weapons, and magic scrolls. A towering crystal tower casts a soft, lavender glow on the scene. Neon signs and floating lanterns illuminate the path ahead. The ground is covered in shimmering, iridescent stones. The style is stylized 3D game art with bold outlines and saturated colors. Off-screen to the left: a wizard casting a spell. To the right: a group of adventurers setting up camp with glowing campfires. Behind: a massive dragon statue guarding the entrance to an underground city. First-person viewer. First-person perspective, eye-level, standing in the center of the fantasy market square, looking straight ahead."},{"id":"b108","prompt":"A narrow, cobblestone alleyway in a dilapidated medieval town.","steps":2.46,"fps4":18.1,"fps":25.1,"speed":1.39,"actions":["left","D","S","right","W"],"full":"A narrow, cobblestone alleyway in a dilapidated medieval town. Stucco-covered walls with weathered facades and narrow windows line both sides, interspersed with ivy and wildflowers climbing through cracks. A flickering oil lamp stands on a stone pedestal casting warm light and long shadows. A broken wooden door and a pile of old books lie half-buried beside a decaying wall. In the distance, the silhouette of a bell tower can be seen against a sunset sky, painted in bold strokes of red, orange, and gold. First-person viewer. First-person view, looking down the alley with a slight tilt upwards towards the sky."},{"id":"b110","prompt":"A abandoned factory interior with high ceilings and exposed brick walls.","steps":3.32,"fps4":18.1,"fps":20.7,"speed":1.14,"actions":["left","W","A","stop","W"],"full":"A abandoned factory interior with high ceilings and exposed brick walls. Large machinery frames and rusted steel beams create a cluttered environment. Sunlight filters through broken skylights, casting patches of light on the worn cement floor. The area is dusty with remnants of old conveyor belts and metal scraps. A narrow walkway lined with broken industrial bins leads deeper into the factory, while to the left, a heavy iron door stands partially open, hinting at more rooms beyond. To the right, a stack of wooden crates partially blocks the view, obscuring what lies beyond. First-person viewer. First-person view with a flashlight in one gloved hand, illuminating the immediate surroundings."}]};
  var $ = function (id) { return document.getElementById(id); };
  var NS = "http://www.w3.org/2000/svg";
  function el(tag, attrs, parent, text) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    if (parent) parent.appendChild(n);
    return n;
  }
  function h(tag, cls, parent, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    if (parent) parent.appendChild(n);
    return n;
  }

  /* ------------------------------------------------------------------ numbers from the paper (Tables 1 to 5) */
  var T1 = [ // 5 s, LongLive, VBench
    { m: "1-step", k: 1.00, fps: 67.97, total: 79.06, quality: 80.03, semantic: 75.17 },
    { m: "2-step", k: 2.00, fps: 44.54, total: 82.46, quality: 83.06, semantic: 80.09 },
    { m: "3-step", k: 3.00, fps: 33.15, total: 83.08, quality: 83.45, semantic: 81.58 },
    { m: "4-step", k: 4.00, fps: 26.40, total: 83.08, quality: 83.49, semantic: 81.43, ref: 1 },
    { m: "Ours, training-free", k: 1.65, fps: 43.61, total: 83.12, quality: 83.51, semantic: 81.56, ours: "tf" },
    { m: "Ours, learned verifier", k: 1.68, fps: 41.74, total: 83.21, quality: 83.54, semantic: 81.89, ours: "h" }
  ];
  var T2 = [ // 30 s, LongLive, VBench-Long
    { m: "1-step", k: 1.00, fps: 61.6, drift: 2.930, total: 80.82, quality: 81.87, semantic: 76.64 },
    { m: "2-step", k: 2.00, fps: 40.9, drift: 1.992, total: 82.32, quality: 82.99, semantic: 79.61 },
    { m: "3-step", k: 3.00, fps: 30.6, drift: 1.738, total: 82.60, quality: 83.09, semantic: 80.67 },
    { m: "4-step", k: 4.00, fps: 24.5, drift: 1.722, total: 82.69, quality: 83.29, semantic: 80.30, ref: 1 },
    { m: "Ours, training-free", k: 1.71, fps: 38.8, drift: 1.685, total: 82.75, quality: 83.28, semantic: 80.65, ours: "tf" },
    { m: "Ours, learned verifier", k: 1.72, fps: 37.8, drift: 1.707, total: 82.81, quality: 83.32, semantic: 80.77, ours: "h" }
  ];
  var T3 = [ // world generation, Lingbot-World 2.0
    { m: "1-step", k: 1.00, fps: 46.9, trans: 0.552, rot: 0.360, drift: 5.579, quality: 77.19 },
    { m: "2-step", k: 2.00, fps: 30.7, trans: 0.345, rot: 0.255, drift: 3.999, quality: 81.68 },
    { m: "3-step", k: 3.00, fps: 22.8, trans: 0.329, rot: 0.251, drift: 3.361, quality: 82.38 },
    { m: "4-step", k: 4.00, fps: 18.1, trans: 0.328, rot: 0.253, drift: 3.094, quality: 82.62, ref: 1 },
    { m: "Ours, training-free", k: 2.53, fps: 24.7, trans: 0.329, rot: 0.259, drift: 2.926, quality: 82.58, ours: "tf" },
    { m: "Ours, learned verifier", k: 2.55, fps: 24.5, trans: 0.328, rot: 0.260, drift: 2.839, quality: 82.65, ours: "h" }
  ];
  var T4 = [ // verification tolerance
    { m: "ε = 0.16", k: 3.47, fps: 20.1, quality: 82.56, imaging: 72.43, drift: 3.010 },
    { m: "ε = 0.20", k: 2.95, fps: 22.4, quality: 82.72, imaging: 72.64, drift: 2.862 },
    { m: "ε = 0.24", k: 2.55, fps: 24.5, quality: 82.65, imaging: 72.65, drift: 2.839, ours: "h" },
    { m: "ε = 0.28", k: 2.24, fps: 26.4, quality: 82.53, imaging: 72.32, drift: 2.943 },
    { m: "ε = 0.32", k: 1.97, fps: 28.3, quality: 82.07, imaging: 71.69, drift: 3.398 },
    { m: "Uniform 4-step", k: 4.00, fps: 18.1, quality: 82.62, imaging: 72.24, drift: 3.094, ref: 1 }
  ];
  var T5 = [ // routing strategy
    { m: "Channel variance", k: 2.60, fps: 24.2, quality: 78.23, imaging: 66.59, drift: 4.996 },
    { m: "Temporal difference", k: 2.58, fps: 24.4, quality: 80.97, imaging: 70.22, drift: 4.116 },
    { m: "Chunk-wise acceptance", k: 2.61, fps: 25.2, quality: 82.54, imaging: 72.26, drift: 3.214 },
    { m: "Ours, training-free", k: 2.53, fps: 24.7, quality: 82.58, imaging: 72.69, drift: 2.926, ours: "tf" },
    { m: "Ours, learned verifier", k: 2.55, fps: 24.5, quality: 82.65, imaging: 72.65, drift: 2.839, ours: "h" },
    { m: "Oracle", k: 2.46, fps: null, quality: 82.61, imaging: 72.60, drift: 2.903, ref: 1 },
    { m: "Uniform 4-step", k: 4.00, fps: 18.1, quality: 82.62, imaging: 72.24, drift: 3.094, ref: 1 }
  ];

  /* ------------------------------------------------------------------ tables */
  function table(id, rows, cols) {
    var host = $(id); if (!host) return;
    var t = h("table", "", host), thead = h("thead", "", t), tr = h("tr", "", thead);
    cols.forEach(function (c) { h("th", "", tr, c.h); });
    var tb = h("tbody", "", t);
    var best = {};
    cols.forEach(function (c) {
      if (!c.best) return;
      var vals = rows.filter(function (r) { return !r.noBest && r[c.key] != null; }).map(function (r) { return r[c.key]; });
      best[c.key] = c.best === "min" ? Math.min.apply(null, vals) : Math.max.apply(null, vals);
    });
    rows.forEach(function (r) {
      var row = h("tr", r.ours ? "ours" : (r.ref ? "ref" : ""), tb);
      cols.forEach(function (c) {
        var v = r[c.key], s = v == null ? "N/A" : (typeof v === "number" ? v.toFixed(c.d) : v);
        var td = h("td", "", row, s);
        if (c.best && v === best[c.key] && !r.noBest) td.className = "best";
      });
    });
  }
  table("table-short", T1, [{ h: "Method", key: "m" }, { h: "Mean steps", key: "k", d: 2 }, { h: "Throughput (fps)", key: "fps", d: 2 },
    { h: "Total", key: "total", d: 2, best: "max" }, { h: "Quality", key: "quality", d: 2, best: "max" }, { h: "Semantic", key: "semantic", d: 2, best: "max" }]);
  table("table-long", T2, [{ h: "Method", key: "m" }, { h: "Mean steps", key: "k", d: 2 }, { h: "Throughput (fps)", key: "fps", d: 1 }, { h: "Drift", key: "drift", d: 3, best: "min" },
    { h: "Total", key: "total", d: 2, best: "max" }, { h: "Quality", key: "quality", d: 2, best: "max" }, { h: "Semantic", key: "semantic", d: 2, best: "max" }]);
  table("table-world", T3, [{ h: "Method", key: "m" }, { h: "Mean steps", key: "k", d: 2 }, { h: "Throughput (fps)", key: "fps", d: 1 }, { h: "RPE trans", key: "trans", d: 3, best: "min" },
    { h: "RPE rot", key: "rot", d: 3, best: "min" }, { h: "Drift", key: "drift", d: 3, best: "min" }, { h: "Quality", key: "quality", d: 2, best: "max" }]);
  var abl = [{ h: "Method", key: "m" }, { h: "Mean steps", key: "k", d: 2 }, { h: "Throughput (fps)", key: "fps", d: 1 },
    { h: "Quality", key: "quality", d: 2, best: "max" }, { h: "Imaging quality", key: "imaging", d: 2, best: "max" }, { h: "Drift", key: "drift", d: 3, best: "min" }];
  abl[0] = { h: "Tolerance", key: "m" }; table("table-eps", T4, abl);
  abl[0] = { h: "Method", key: "m" }; table("table-routing", T5, abl);

  /* ------------------------------------------------------------------ charts */
  var COL = { base: "#8c8782", green: "#03c75a", ink: "#0c0a09", line: "#57534e", grid: "#e7e5e4", text: "#78716c", label: "#292524" };
  function chart(id, c) {
    var host = $(id); if (!host) return;
    var W = c.w || 560, H = c.h || 330, L = c.w ? 36 : 54, R = c.w ? 14 : 20, T = c.w ? 10 : 16, B = c.w ? 22 : 46, pw = W - L - R, ph = H - T - B;
    var X = function (v) { return L + (v - c.x[0]) / (c.x[1] - c.x[0]) * pw; };
    var Y = function (v) { return T + (c.y[1] - v) / (c.y[1] - c.y[0]) * ph; };
    var svg = el("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": c.aria }, host);
    var cid = id + "-clip";
    var cp = el("clipPath", { id: cid }, el("defs", {}, svg));
    el("rect", { x: L, y: T, width: pw, height: ph }, cp);
    c.yt.forEach(function (v) {
      el("line", { x1: L, x2: W - R, y1: Y(v), y2: Y(v), stroke: COL.grid, "stroke-width": 1 }, svg);
      el("text", { x: L - 10, y: Y(v) + 4, "text-anchor": "end", "font-size": 12, fill: COL.text }, svg, v.toFixed(c.yd));
    });
    c.xt.forEach(function (v) {
      el("line", { x1: X(v), x2: X(v), y1: T + ph, y2: T + ph + 5, stroke: COL.grid, "stroke-width": 1 }, svg);
      el("text", { x: X(v), y: T + ph + 20, "text-anchor": "middle", "font-size": 12, fill: COL.text }, svg, String(v));
    });
    if (c.xlabel !== " ") el("text", { x: L + pw / 2, y: H - 6, "text-anchor": "middle", "font-size": 12.5, fill: COL.text }, svg, c.xlabel || "Mean denoising steps per token");
    if (c.ref != null) {
      el("line", { x1: L, x2: W - R, y1: Y(c.ref), y2: Y(c.ref), stroke: COL.base, "stroke-width": 1.5, "stroke-dasharray": "5 5" }, svg);
      if (c.refLabel) el("text", { x: L + 6, y: Y(c.ref) + (c.refBelow ? 15 : -7), "font-size": 11.5, fill: COL.text }, svg, c.refLabel);
    }
    if (c.line) {
      var d = c.line.map(function (p, i) { return (i ? "L" : "M") + X(p[0]).toFixed(1) + " " + Y(p[1]).toFixed(1); }).join(" ");
      el("path", { d: d, fill: "none", stroke: c.lineColor || COL.base, "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round", "clip-path": "url(#" + cid + ")" }, svg);
    }
    var tip = h("div", "tip", host); tip.hidden = true;
    function show(p, node) {
      tip.innerHTML = "<b>" + p.tip[0] + "</b><br><span>" + p.tip.slice(1).join("<br>") + "</span>";
      var r = svg.getBoundingClientRect(), s = r.width / W, tx = X(p.x) * s;
      tip.hidden = false;
      var half = tip.offsetWidth / 2;
      tx = Math.max(half + 2, Math.min(r.width - half - 2, tx));
      tip.style.left = tx + "px"; tip.style.top = (Y(p.y) * s) + "px";
    }
    c.pts.forEach(function (p) {
      var cx = X(p.x), cy = Y(p.y), g = el("g", {}, svg);
      if (p.kind === "h") el("circle", { cx: cx, cy: cy, r: 7.5, fill: COL.green, stroke: "#fff", "stroke-width": 2 }, g);
      else if (p.kind === "tf") { el("circle", { cx: cx, cy: cy, r: 8, fill: "#fff" }, g); el("circle", { cx: cx, cy: cy, r: 5.5, fill: "#fff", stroke: COL.green, "stroke-width": 3 }, g); }
      else el("circle", { cx: cx, cy: cy, r: 5.5, fill: p.kind === "ink" ? COL.line : COL.base, stroke: "#fff", "stroke-width": 2 }, g);
      if (p.label) {
        var lx = cx + (p.dx == null ? 0 : p.dx), ly = cy + (p.dy == null ? 22 : p.dy);
        el("text", { x: lx, y: ly, "text-anchor": p.anchor || "middle", "font-size": 12.5, "font-weight": p.kind === "h" || p.kind === "tf" ? 600 : 500,
          fill: p.kind === "base" ? COL.text : COL.label, stroke: "#fff", "stroke-width": 3.5, "paint-order": "stroke", "stroke-linejoin": "round" }, g, p.label);
      }
      var hit = el("circle", { cx: cx, cy: cy, r: 15, fill: "transparent", tabindex: 0, role: "img", "aria-label": p.tip.join(", ") }, g);
      hit.style.cursor = "default"; hit.style.outline = "none";
      hit.addEventListener("mouseenter", function () { show(p); });
      hit.addEventListener("focus", function () { show(p); });
      hit.addEventListener("mouseleave", function () { tip.hidden = true; });
      hit.addEventListener("blur", function () { tip.hidden = true; });
      hit.addEventListener("touchstart", function () { show(p); }, { passive: true });
    });
  }
  function fx(v, d) { return v.toFixed(d); }
  function stepChart(id, rows, key, name, y, yt, yd, place, fd) {
    var ref = rows.filter(function (r) { return r.ref; })[0];
    var uni = rows.filter(function (r) { return !r.ours; });
    var pts = [];
    rows.forEach(function (r) {
      if (r.k < 1.4) return;
      var p = { x: r.k, y: r[key], kind: r.ours || "base",
        tip: [r.m, fx(r.k, 2) + " steps per token", fx(r.fps, fd) + " fps" + (r.ref ? "" : ", " + fx(r.fps / ref.fps, 2) + "× the 4-step speed"), name + " " + fx(r[key], 2)] };
      var pl = place[r.ours || r.m] || {};
      p.label = r.ours === "h" ? "Ours (learned)" : r.ours === "tf" ? "Ours (training-free)" : r.m;
      p.dx = pl.dx; p.dy = pl.dy; p.anchor = pl.anchor;
      pts.push(p);
    });
    chart(id, { x: [1.4, 4.2], xt: [1.5, 2, 2.5, 3, 3.5, 4], y: y, yt: yt, yd: yd, ref: ref[key],
      line: uni.map(function (r) { return [r.k, r[key]]; }), pts: pts,
      aria: name + " against mean denoising steps for uniform sampling and Speculative Forcing" });
  }
  var R = { dx: 13, dy: 4, anchor: "start" };
  stepChart("chart-short", T1, "total", "VBench total", [82, 83.5], [82, 82.5, 83, 83.5], 1,
    { h: R, tf: { dx: 13, dy: 21, anchor: "start" }, "2-step": { dx: 13, dy: 5, anchor: "start" }, "3-step": { dy: 22 }, "4-step": { dy: 22 } }, 2);
  stepChart("chart-long", T2, "total", "VBench-Long total", [82.2, 83.0], [82.2, 82.4, 82.6, 82.8, 83.0], 1,
    { h: R, tf: R, "2-step": { dx: 13, dy: 5, anchor: "start" }, "3-step": { dy: 22 }, "4-step": { dy: 22 }, refBelow: true }, 1);
  stepChart("chart-world", T3, "quality", "VBench quality", [81.5, 83.0], [81.5, 82, 82.5, 83], 1,
    { h: { dx: 4, dy: -14, anchor: "middle" }, tf: { dx: 13, dy: 20, anchor: "start" }, "2-step": { dx: 13, dy: 5, anchor: "start" }, "3-step": { dy: 22 }, "4-step": { dy: 22 } }, 1);

  function epsChart(id, key, name, y, yt, yd, place) {
    var sweep = T4.filter(function (r) { return !r.ref; }).slice().sort(function (a, b) { return a.k - b.k; });
    var ref = T4.filter(function (r) { return r.ref; })[0];
    var pts = T4.map(function (r) {
      var pl = place[r.m] || {};
      return { x: r.k, y: r[key], kind: r.ref ? "base" : (r.ours ? "h" : "ink"), label: r.ref ? "4-step" : r.m, dx: pl.dx, dy: pl.dy, anchor: pl.anchor,
        tip: [r.m, fx(r.k, 2) + " steps per token, " + fx(r.fps, 1) + " fps", name + " " + fx(r[key], yd === 1 ? (key === "drift" ? 3 : 2) : 2)] };
    });
    chart(id, { h: 300, x: [1.8, 4.2], xt: [2, 2.5, 3, 3.5, 4], y: y, yt: yt, yd: yd, ref: ref[key],
      line: sweep.map(function (r) { return [r.k, r[key]]; }), lineColor: COL.line, pts: pts,
      aria: name + " for five verification tolerances against mean denoising steps, with uniform 4-step sampling as reference" });
  }
  // Drift beside the quality chart for the long and world benchmarks
  function driftChart(id, rows, y, yt, fd) {
    var ref = rows.filter(function (r) { return r.ref; })[0], uni = rows.filter(function (r) { return !r.ours; }), pts = [];
    var lowOurs = Math.min.apply(null, rows.filter(function (r) { return r.ours; }).map(function (r) { return r.drift; }));
    rows.forEach(function (r) {
      if (r.k < 1.4 || r.drift > y[1]) return;
      var p = { x: r.k, y: r.drift, kind: r.ours || "base", tip: [r.m, fx(r.k, 2) + " steps per token", fx(r.fps, fd) + " fps", "Drift " + fx(r.drift, 3)] };
      p.label = r.ours === "h" ? "Ours (learned)" : r.ours === "tf" ? "Ours (training-free)" : r.m;
      // of the two ours points, the lower one is labelled below and the higher one above
      if (r.ours) { p.dy = r.drift === lowOurs ? 24 : -16; } else { p.dy = 22; }
      pts.push(p);
    });
    chart(id, { h: 230, x: [1.4, 4.2], xt: [1.5, 2, 2.5, 3, 3.5, 4], y: y, yt: yt, yd: 1, ref: ref.drift,
      line: uni.map(function (r) { return [r.k, r.drift]; }), pts: pts, aria: "Drift against mean denoising steps, lower is better" });
  }
  driftChart("chart-long-drift", T2, [1.6, 2.1], [1.6, 1.8, 2.0], 1);
  driftChart("chart-world-drift", T3, [2.7, 4.2], [2.8, 3.2, 3.6, 4.0], 1);
  // hero: three compact quality charts
  function miniChart(id, rows, key, y, yt) {
    var ref = rows.filter(function (r) { return r.ref; })[0], uni = rows.filter(function (r) { return !r.ours; }), pts = [];
    rows.forEach(function (r) {
      if (r.k < 1.4) return;
      var p = { x: r.k, y: r[key], kind: r.ours || "base", tip: [r.m, fx(r.k, 2) + " steps per token", fx(r.fps, 1) + " fps", "score " + fx(r[key], 2)] };
      if (r.ours === "h") { p.label = "Ours"; p.dx = 11; p.dy = -8; p.anchor = "start"; }
      else if (r.ref) { p.label = "4-step"; p.dy = 18; }
      pts.push(p);
    });
    chart(id, { w: 330, h: 100, x: [1.4, 4.2], xt: [2, 3, 4], y: y, yt: yt, yd: 1, ref: ref[key], xlabel: " ",
      line: uni.map(function (r) { return [r.k, r[key]]; }), pts: pts, aria: "Quality against mean denoising steps, uniform sampling and Speculative Forcing" });
  }
  miniChart("mini-short", T1, "total", [82, 83.5], [82, 83]);
  miniChart("mini-long", T2, "total", [82.2, 83.0], [82.2, 82.6, 83.0]);
  miniChart("mini-world", T3, "quality", [81.5, 83], [81.5, 82.5]);

  // hero mark: nine tokens ask "?", then each is accepted or rejected at random, then they ask again
  (function () {
    var svg = $("mark"); if (!svg) return;
    svg.setAttribute("viewBox", "0 0 72 72");
    var defs = el("defs", {}, svg);
    var lg = el("linearGradient", { id: "mark-bg", x1: "0", y1: "0", x2: "1", y2: "1" }, defs);
    el("stop", { offset: "0", "stop-color": "#f6faf7" }, lg); el("stop", { offset: "1", "stop-color": "#e9f3ed" }, lg);
    var ag = el("linearGradient", { id: "mark-ok", x1: "0", y1: "0", x2: "1", y2: "1" }, defs);
    el("stop", { offset: "0", "stop-color": "#17d66b" }, ag); el("stop", { offset: "1", "stop-color": "#03b552" }, ag);
    var rg = el("linearGradient", { id: "mark-no", x1: "0", y1: "0", x2: "1", y2: "1" }, defs);
    el("stop", { offset: "0", "stop-color": "#f06b6f" }, rg); el("stop", { offset: "1", "stop-color": "#dd3f45" }, rg);
    el("rect", { x: 1, y: 1, width: 70, height: 70, rx: 18, fill: "url(#mark-bg)", stroke: "#d9e4dd", "stroke-width": 1.5 }, svg);
    var cells = [], T = 15, G = 4, k = T / 17, O = (72 - 3 * T - 2 * G) / 2;
    for (var r = 0; r < 3; r++) for (var c = 0; c < 3; c++) {
      var x = O + c * (T + G), yy = O + r * (T + G), g = el("g", { "class": "cell" }, svg);
      var rect = el("rect", { x: x, y: yy, width: T, height: T, rx: 5, fill: "#fff", stroke: "#c9d3cd", "stroke-width": 1.6 }, g);
      var q = el("text", { x: x + T / 2, y: yy + T / 2 + 4.3 * k, "text-anchor": "middle", "font-size": 12 * k, "font-weight": 700, fill: "#a4adb0", "font-family": "Inter, Arial, sans-serif" }, g, "?");
      var ok = el("path", { d: "M" + (x + 4.3 * k) + " " + (yy + 9 * k) + "l" + 3.2 * k + " " + 3.2 * k + " " + 5.4 * k + " " + -6.4 * k, fill: "none", stroke: "#fff", "stroke-width": 2.6, "stroke-linecap": "round", "stroke-linejoin": "round", "class": "sym" }, g);
      var no = el("path", { d: "M" + (x + 5.4 * k) + " " + (yy + 5.4 * k) + "l" + 6.2 * k + " " + 6.2 * k + "M" + (x + 11.6 * k) + " " + (yy + 5.4 * k) + "l" + -6.2 * k + " " + 6.2 * k, fill: "none", stroke: "#fff", "stroke-width": 2.6, "stroke-linecap": "round", "class": "sym" }, g);
      ok.style.opacity = 0; no.style.opacity = 0;
      cells.push({ rect: rect, q: q, ok: ok, no: no });
    }
    function ask(cell) { cell.rect.setAttribute("fill", "#fff"); cell.rect.setAttribute("stroke", "#c9d3cd"); cell.q.style.opacity = 1; cell.ok.style.opacity = 0; cell.no.style.opacity = 0; }
    function decide(cell, accept) {
      cell.q.style.opacity = 0;
      cell.rect.setAttribute("fill", accept ? "url(#mark-ok)" : "url(#mark-no)"); cell.rect.setAttribute("stroke", accept ? "#03b552" : "#dd3f45");
      (accept ? cell.ok : cell.no).style.opacity = 1; (accept ? cell.no : cell.ok).style.opacity = 0;
    }
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    function round() {
      cells.forEach(ask);
      if (reduce) { cells.forEach(function (c, i) { decide(c, i % 3 !== 2); }); return; }
      var order = cells.map(function (_, i) { return i; }).sort(function () { return Math.random() - 0.5; });
      order.forEach(function (i, n) { setTimeout(function () { decide(cells[i], Math.random() < 0.62); }, 900 + n * 160); });
      setTimeout(round, 900 + order.length * 160 + 1500);
    }
    round();
  })();
  var UP = { dy: -13 };
  epsChart("chart-eps-q", "quality", "Quality", [82.0, 82.8], [82.0, 82.2, 82.4, 82.6, 82.8], 1,
    { "ε = 0.32": { dx: 12, dy: 5, anchor: "start" }, "ε = 0.28": { dx: 12, dy: 14, anchor: "start" }, "ε = 0.24": UP, "ε = 0.20": UP, "ε = 0.16": { dy: 23 }, "Uniform 4-step": { dy: 23 } });
  epsChart("chart-eps-d", "drift", "Drift", [2.7, 3.5], [2.8, 3.0, 3.2, 3.4], 1,
    { "ε = 0.32": { dx: 12, dy: 5, anchor: "start" }, "ε = 0.28": { dx: -4, dy: 23 }, "ε = 0.24": { dy: 23 }, "ε = 0.20": { dy: 23 }, "ε = 0.16": { dy: 23 }, "Uniform 4-step": UP });

  /* ------------------------------------------------------------------ qualitative galleries: one full-width player per section, samples play one after another */
  var KEY = { W: "W", A: "A", S: "S", D: "D", left: "\u2190", right: "\u2192", stop: "stop" };
  var players = [];
  function esc(t) { return t.replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
  function gallery(sec, speed, note) {
    var host = $("gallery-" + sec), list = SAMPLES[sec]; if (!host || !list || !list.length) return;
    var head = h("div", "grid-head", host);
    head.innerHTML = "<div class=\"grid-cols\"><span>4-step</span><span class=\"ours\">Speculative Forcing</span><span>Accepted step per token" +
      "<span class=\"steps-key\">" + [1, 2, 3, 4].map(function (k) { return "<span><i style=\"background:var(--t" + k + ")\"></i>" + k + "</span>"; }).join("") + "</span></span></div>" +
      "<span class=\"speed\">" + speed + " playback</span>";
    var stage = h("div", "stage", host);
    stage.style.aspectRatio = sec === "world" ? "1748 / 340" : "1748 / 352";
    // two players: the next clip is fully loaded in the hidden one, so the switch is a visibility flip
    function mk() {
      var v = document.createElement("video");
      v.className = "stage-video"; v.muted = true; v.playsInline = true; v.preload = "auto";
      v.setAttribute("muted", ""); v.setAttribute("playsinline", ""); stage.appendChild(v); return v;
    }
    var A = mk(), B = mk(); B.hidden = true;
    var bar = h("div", "stage-bar", host); var fill = h("i", "", bar);
    var cap = h("div", "tile-cap stage-cap", host);
    var strip = h("div", "strip", host); strip.setAttribute("role", "tablist"); strip.setAttribute("aria-label", "Samples");
    var cur = -1, want = true, live = A, back = B;
    function describe(i) {
      var s = list[i];
      var keys = s.actions ? "<span class=\"keys\" aria-label=\"Camera actions\">" + s.actions.map(function (a) { return "<kbd>" + (KEY[a] || a) + "</kbd>"; }).join("") + "</span>" : "";
      cap.innerHTML = "<span class=\"nums\"><b>" + s.steps.toFixed(2) + " steps / token</b> " + s.speed.toFixed(2) + "\u00d7 faster, " + s.fps4.toFixed(1) + " \u2192 " + s.fps.toFixed(1) + " fps" +
        "<span class=\"count\">" + (i + 1) + " / " + list.length + "</span></span>" +
        (s.prompt ? "<span class=\"prompt\" title=\"" + esc(s.full || s.prompt) + "\">\u201c" + esc(s.prompt) + "\u201d" + keys + "</span>" : (note ? "<span class=\"prompt\">" + note + "</span>" : ""));
      Array.prototype.forEach.call(strip.children, function (b, j) { b.classList.toggle("active", j === i); b.setAttribute("aria-selected", j === i ? "true" : "false"); });
    }
    function load(v, i) { if (v.idx === i) return; v.idx = i; var s = list[i]; v.poster = "static/videos/" + s.id + ".jpg"; v.src = "static/videos/" + s.id + ".mp4"; v.load();
      v.setAttribute("aria-label", "4-step sampling, Speculative Forcing and the accepted step per token" + (s.prompt ? ". " + s.prompt : "")); }
    function play(v) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
    function warm() { load(back, (cur + 1) % list.length); }
    function show(i, autoplay) {           // jump to sample i in the live player
      cur = (i + list.length) % list.length; load(live, cur); describe(cur); if (autoplay) play(live); warm();
    }
    function flip() {                      // swap the preloaded player in
      back.hidden = false; live.hidden = true; live.pause(); var t = live; live = back; back = t;
      describe(cur); play(live); warm();
    }
    function advance() { cur = (cur + 1) % list.length; load(back, cur); flip(); }   // a hovered thumbnail may have taken the back player
    function jump(i) {                     // a clicked thumbnail: reuse the preloaded clip when it is the one
      if (i === cur) { live.currentTime = 0; play(live); return; }
      cur = i; load(back, i); back.currentTime = 0;
      if (back.readyState >= 3) { flip(); return; }
      describe(cur);
      var go = function () { back.removeEventListener("canplay", go); if (back.idx === cur) flip(); };
      back.addEventListener("canplay", go);
      play(back);
    }
    [A, B].forEach(function (v) {
      v.addEventListener("ended", function () { if (v === live && want) advance(); });
      v.addEventListener("error", function () { if (v === live && want) advance(); });
      v.addEventListener("timeupdate", function () { if (v === live) fill.style.width = (v.duration ? v.currentTime / v.duration * 100 : 0) + "%"; });
      v.addEventListener("click", function () { if (v !== live) return; if (v.paused) { want = true; play(v); } else { want = false; v.pause(); } });
    });
    list.forEach(function (s, i) {
      var b = h("button", "thumb", strip, "<img src=\"static/videos/" + s.id + "_t.jpg\" alt=\"\" width=\"320\" height=\"180\"><span>" + s.steps.toFixed(2) + " steps</span>");
      b.type = "button"; b.setAttribute("role", "tab"); b.setAttribute("aria-label", "Sample " + (i + 1) + ", " + s.steps.toFixed(2) + " steps per token");
      b.addEventListener("click", function () { want = true; jump(i); });
      // start fetching as soon as the pointer or focus reaches a thumbnail
      function pre() { if (i !== cur && back.idx !== i) load(back, i); }
      b.addEventListener("pointerenter", pre); b.addEventListener("focus", pre);
    });
    show(0, false);
    // watch the gallery box, not a video: the hidden player would read as off-screen and pause the live one
    players.push({ el: host, start: function () { if (want) play(live); }, stop: function () { live.pause(); } });
  }
  gallery("short", "1\u00d7", "LongLive, 5-second video from the VBench prompt set");
  gallery("long", "3\u00d7", "");
  gallery("world", "1.5\u00d7", "");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { var p = players.filter(function (q) { return q.el === e.target; })[0]; if (!p) return; if (e.isIntersecting) p.start(); else p.stop(); });
    }, { threshold: 0.3 });
    players.forEach(function (p) { io.observe(p.el); });
  } else { players.forEach(function (p) { p.start(); }); }

  /* ------------------------------------------------------------------ table tabs */
  (function () {
    var tabs = Array.prototype.slice.call(document.querySelectorAll("#q-tabs .tab")); if (!tabs.length) return;
    tabs.forEach(function (b) {
      b.addEventListener("click", function () {
        tabs.forEach(function (o) { var on = o === b; o.setAttribute("aria-selected", on ? "true" : "false"); var p = $(o.getAttribute("aria-controls")); if (p) p.hidden = !on; });
      });
    });
  })();

  /* ------------------------------------------------------------------ teaser player */
  (function () {
    var v = $("reel-video"), btn = $("reel-play"), ico = $("reel-ico"), seek = $("reel-seek"), fill = $("reel-fill"), time = $("reel-time");
    if (!v) return;
    var PAUSE = "<rect x=\"6\" y=\"5\" width=\"4\" height=\"14\" rx=\"1\"/><rect x=\"14\" y=\"5\" width=\"4\" height=\"14\" rx=\"1\"/>", PLAY = "<path d=\"M8 5v14l11-7z\"/>";
    function sync() { ico.innerHTML = v.paused ? PLAY : PAUSE; btn.setAttribute("aria-label", v.paused ? "Play" : "Pause"); }
    function toggle() { if (v.paused) { var p = v.play(); if (p && p.catch) p.catch(function () {}); } else v.pause(); }
    function fmt(t) { t = Math.max(0, Math.floor(t || 0)); return Math.floor(t / 60) + ":" + ("0" + (t % 60)).slice(-2); }
    v.addEventListener("play", sync); v.addEventListener("pause", sync);
    v.addEventListener("click", toggle); btn.addEventListener("click", toggle);
    v.addEventListener("timeupdate", function () {
      var f = v.duration ? v.currentTime / v.duration : 0;
      fill.style.width = (f * 100) + "%"; time.textContent = fmt(v.currentTime); seek.setAttribute("aria-valuenow", Math.round(f * 100));
    });
    function at(e) { var r = seek.getBoundingClientRect(), x = (e.touches ? e.touches[0].clientX : e.clientX); if (v.duration) v.currentTime = Math.max(0, Math.min(1, (x - r.left) / r.width)) * v.duration; }
    var drag = false;
    seek.addEventListener("mousedown", function (e) { drag = true; at(e); });
    window.addEventListener("mousemove", function (e) { if (drag) at(e); });
    window.addEventListener("mouseup", function () { drag = false; });
    seek.addEventListener("touchstart", at, { passive: true }); seek.addEventListener("touchmove", at, { passive: true });
    seek.addEventListener("keydown", function (e) {
      if (!v.duration) return;
      if (e.key === "ArrowRight") { v.currentTime = Math.min(v.duration, v.currentTime + 5); e.preventDefault(); }
      if (e.key === "ArrowLeft") { v.currentTime = Math.max(0, v.currentTime - 5); e.preventDefault(); }
      if (e.key === " " || e.key === "Enter") { toggle(); e.preventDefault(); }
    });
    sync();
  })();

  /* ------------------------------------------------------------------ table of contents: mark the section in view */
  (function () {
    var items = Array.prototype.slice.call(document.querySelectorAll(".sidebar-item"));
    var secs = items.map(function (a) { return document.getElementById(a.getAttribute("href").slice(1)); });
    function mark() {
      var y = window.scrollY + window.innerHeight * 0.35, cur = 0;
      secs.forEach(function (s, i) { if (s && s.offsetTop <= y) cur = i; });
      items.forEach(function (a, i) { a.classList.toggle("active", i === cur); });
    }
    window.addEventListener("scroll", mark, { passive: true }); window.addEventListener("resize", mark); mark();
  })();

  /* ------------------------------------------------------------------ copy the BibTeX entry */
  (function () {
    var b = $("copy-bib"), pre = $("bibtex"); if (!b) return;
    function done(ok) { b.textContent = ok ? "Copied" : "Select and copy"; setTimeout(function () { b.textContent = "Copy"; }, 1600); }
    function select() { var r = document.createRange(); r.selectNodeContents(pre); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }
    b.addEventListener("click", function () {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(pre.textContent).then(function () { done(true); }, function () { select(); done(false); });
      else { select(); done(false); }
    });
  })();
})();

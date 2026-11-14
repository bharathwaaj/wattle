/* @ds-bundle: {"format":4,"namespace":"Wattle","components":[{"name":"Button"},{"name":"Input"},{"name":"Card"},{"name":"Icon"},{"name":"Badge"},{"name":"ActionButton"},{"name":"ProgressButton"},{"name":"HoldButton"},{"name":"UndoButton"},{"name":"ReactionButton"},{"name":"IconDisc"},{"name":"DateBlock"},{"name":"MetaList"},{"name":"Progress"},{"name":"Checklist"},{"name":"Avatar"},{"name":"Stat"},{"name":"Sparkline"},{"name":"SeatMap"},{"name":"CountBadge"},{"name":"Status"},{"name":"Tag"},{"name":"Checkbox"},{"name":"RadioGroup"},{"name":"Switch"},{"name":"Select"},{"name":"Textarea"},{"name":"Tabs"},{"name":"Dialog"},{"name":"Toaster"},{"name":"Tooltip"},{"name":"DropdownMenu"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(" "); }
  function omit(props, keys) { var o = {}; for (var k in props) if (keys.indexOf(k) < 0) o[k] = props[k]; return o; }

  /* Lucide v0.460.0 icon nodes (ISC licence), the same set as assets/Icons */
  var ICONS = {"search":[["circle",{"cx":"11","cy":"11","r":"8"}],["path",{"d":"m21 21-4.3-4.3"}]],"plus":[["path",{"d":"M5 12h14"}],["path",{"d":"M12 5v14"}]],"x":[["path",{"d":"M18 6 6 18"}],["path",{"d":"m6 6 12 12"}]],"check":[["path",{"d":"M20 6 9 17l-5-5"}]],"chevron-down":[["path",{"d":"m6 9 6 6 6-6"}]],"chevron-right":[["path",{"d":"m9 18 6-6-6-6"}]],"arrow-left":[["path",{"d":"m12 19-7-7 7-7"}],["path",{"d":"M19 12H5"}]],"arrow-right":[["path",{"d":"M5 12h14"}],["path",{"d":"m12 5 7 7-7 7"}]],"menu":[["line",{"x1":"4","x2":"20","y1":"12","y2":"12"}],["line",{"x1":"4","x2":"20","y1":"6","y2":"6"}],["line",{"x1":"4","x2":"20","y1":"18","y2":"18"}]],"settings":[["path",{"d":"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{"cx":"12","cy":"12","r":"3"}]],"user":[["path",{"d":"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{"cx":"12","cy":"7","r":"4"}]],"bell":[["path",{"d":"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}],["path",{"d":"M10.3 21a1.94 1.94 0 0 0 3.4 0"}]],"house":[["path",{"d":"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{"d":"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]],"book-open":[["path",{"d":"M12 7v14"}],["path",{"d":"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]],"calendar":[["path",{"d":"M8 2v4"}],["path",{"d":"M16 2v4"}],["rect",{"width":"18","height":"18","x":"3","y":"4","rx":"2"}],["path",{"d":"M3 10h18"}]],"trash-2":[["path",{"d":"M3 6h18"}],["path",{"d":"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{"d":"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{"x1":"10","x2":"10","y1":"11","y2":"17"}],["line",{"x1":"14","x2":"14","y1":"11","y2":"17"}]],"pencil":[["path",{"d":"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{"d":"m15 5 4 4"}]],"upload":[["path",{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{"points":"17 8 12 3 7 8"}],["line",{"x1":"12","x2":"12","y1":"3","y2":"15"}]],"download":[["path",{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{"points":"7 10 12 15 17 10"}],["line",{"x1":"12","x2":"12","y1":"15","y2":"3"}]],"info":[["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M12 16v-4"}],["path",{"d":"M12 8h.01"}]],"triangle-alert":[["path",{"d":"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{"d":"M12 9v4"}],["path",{"d":"M12 17h.01"}]],"eye":[["path",{"d":"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{"cx":"12","cy":"12","r":"3"}]],"log-out":[["path",{"d":"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{"points":"16 17 21 12 16 7"}],["line",{"x1":"21","x2":"9","y1":"12","y2":"12"}]],"filter":[["polygon",{"points":"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]],"clock":[["circle",{"cx":"12","cy":"12","r":"10"}],["polyline",{"points":"12 6 12 12 16 14"}]],"star":[["path",{"d":"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"}]],"heart":[["path",{"d":"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]],"bookmark":[["path",{"d":"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"}]],"link":[["path",{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]],"rotate-ccw":[["path",{"d":"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{"d":"M3 3v5h5"}]],"ellipsis":[["circle",{"cx":"12","cy":"12","r":"1"}],["circle",{"cx":"19","cy":"12","r":"1"}],["circle",{"cx":"5","cy":"12","r":"1"}]]};

  function Icon(props) {
    var size = props.size || 24;
    var nodes = ICONS[props.name];
    if (!nodes) return null;
    var rest = omit(props, ["name", "size", "label", "className", "fill"]);
    rest.xmlns = "http://www.w3.org/2000/svg";
    rest.width = size; rest.height = size; rest.viewBox = "0 0 24 24";
    rest.fill = props.fill || "none"; rest.stroke = "currentColor"; rest.strokeWidth = 1.5;
    rest.strokeLinecap = "round"; rest.strokeLinejoin = "round";
    rest.className = cx("wt-icon", props.className);
    if (props.label) { rest.role = "img"; rest["aria-label"] = props.label; }
    else { rest["aria-hidden"] = "true"; rest.focusable = "false"; }
    return h.apply(null, ["svg", rest].concat(nodes.map(function (n, i) { return h(n[0], Object.assign({ key: i }, n[1])); })));
  }
  Icon.names = Object.keys(ICONS);

  /* An icon prop may be a Lucide name ("search") or any React node. */
  function iconNode(icon, size) {
    if (!icon) return null;
    return typeof icon === "string" ? h(Icon, { name: icon, size: size }) : icon;
  }

  function Button(props) {
    var variant = props.variant || "secondary";
    var size = props.size || "md";
    var iconSize = size === "sm" ? 16 : 18;
    var iconOnly = !props.children && (props.icon || props.iconEnd);
    var rest = omit(props, ["variant", "size", "className", "children", "type", "icon", "iconEnd", "effect"]);
    rest.type = props.type || "button";
    rest.className = cx("wt-btn", "wt-btn-" + variant, size === "sm" && "wt-btn-sm", iconOnly && "wt-btn-icon", props.effect && "wt-fx-" + props.effect, props.className);
    return h("button", rest,
      iconNode(props.icon, iconSize),
      props.children ? h("span", null, props.children) : null,
      iconNode(props.iconEnd, iconSize));
  }

  function Input(props) {
    var autoId = React.useId();
    var id = props.id || autoId;
    var hintId = id + "-hint";
    var errorId = id + "-error";
    var rest = omit(props, ["label", "hint", "error", "className", "id", "icon", "iconEnd"]);
    rest.id = id;
    rest.className = cx("wt-input", props.className);
    if (props.error) rest["aria-invalid"] = "true";
    var describedBy = [props.hint && hintId, props.error && errorId].filter(Boolean).join(" ");
    if (describedBy) rest["aria-describedby"] = describedBy;
    var control = h("input", rest);
    if (props.icon || props.iconEnd) {
      control = h("div", { className: cx("wt-input-wrap", props.icon && "has-icon", props.iconEnd && "has-icon-end") },
        props.icon ? h("span", { className: "wt-input-icon" }, iconNode(props.icon, 18)) : null,
        control,
        props.iconEnd ? h("span", { className: "wt-input-icon wt-input-icon-end" }, iconNode(props.iconEnd, 18)) : null);
    }
    return h("div", { className: "wt-field" },
      props.label ? h("label", { className: "wt-field-label", htmlFor: id }, props.label) : null,
      control,
      props.hint ? h("span", { className: "wt-field-hint", id: hintId }, props.hint) : null,
      props.error ? h("span", { className: "wt-field-error", id: errorId }, h(Icon, { name: "triangle-alert", size: 16 }), h("span", null, props.error)) : null
    );
  }

  function Card(props) {
    var Tag = props.as || "section";
    var rest = omit(props, ["as", "eyebrow", "title", "footer", "selected", "className", "children", "icon", "media", "variant", "divider"]);
    rest.className = cx("wt-card", props.selected && "wt-card-selected", props.variant === "empty" && "wt-card-empty", props.media && "wt-card-has-media", props.className);
    return h(Tag, rest,
      props.media ? h("div", { className: "wt-card-media" }, props.media) : null,
      props.icon ? h("span", { className: "wt-card-icon" }, iconNode(props.icon, 20)) : null,
      props.eyebrow ? h("span", { className: "wt-card-eyebrow" }, props.eyebrow) : null,
      props.title ? h("h3", { className: "wt-card-title" }, props.title) : null,
      props.children ? h("div", { className: "wt-card-body" }, props.children) : null,
      props.footer ? h("div", { className: cx("wt-card-footer", props.divider === false && "wt-card-footer-plain") }, props.footer) : null
    );
  }

  function Badge(props) {
    var tone = props.tone || "neutral";
    var rest = omit(props, ["tone", "icon", "className", "children"]);
    rest.className = cx("wt-badge", "wt-badge-" + tone, props.className);
    return h("span", rest, iconNode(props.icon, 12), props.children);
  }


  /* ---------- Motion buttons ---------- */
  var F = React.Fragment;
  function Live(props) { return h("span", { className: "wt-sr", "aria-live": "polite", role: "status" }, props.children || ""); }
  function Spinner(props) { return h("span", { className: "wt-spinner", "aria-hidden": "true", style: props.size ? { width: props.size, height: props.size } : null }); }
  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  /* Effect on a plain Button: "nudge" (trailing icon slides on hover) or "sweep" (ink fills from the left). */

  function ActionButton(props) {
    var anim = props.animation || "morph";
    var variant = props.variant || "primary";
    var size = props.size || "md";
    var doneVariant = props.doneVariant || (variant === "primary" ? "secondary" : variant);
    var st = React.useState("idle"), state = st[0], set = st[1];
    var ref = React.useRef(null);
    var circle = size === "sm" ? 32 : 40;

    function click(e) {
      if (state === "done" && props.undoable) {
        if (anim === "morph") { var el0 = ref.current; el0.style.width = el0.offsetWidth + "px"; void el0.offsetWidth; set("idle"); requestAnimationFrame(function () { el0.style.width = ""; }); }
        else set("idle");
        if (props.onUndo) props.onUndo(e);
        return;
      }
      if (state !== "idle") return;
      var el = ref.current;
      if (anim === "morph") {
        el.style.width = el.offsetWidth + "px";
        void el.offsetWidth;
        requestAnimationFrame(function () { el.style.width = circle + "px"; });
      }
      set("loading");
      var started = Date.now(), min = anim === "morph" ? 700 : 250;
      Promise.resolve(props.onAction ? props.onAction(e) : null).then(function () {
        return wait(Math.max(0, min - (Date.now() - started)));
      }).then(function () { set("done"); }, function () { el.style.width = ""; set("idle"); });
    }

    React.useLayoutEffect(function () {
      var el = ref.current;
      if (!el || state !== "done" || anim !== "morph") return;
      var from = el.offsetWidth;
      el.style.width = "auto";
      var to = el.offsetWidth;
      el.style.width = from + "px";
      void el.offsetWidth;
      el.style.width = to + "px";
      var t = setTimeout(function () { el.style.width = ""; }, 340);
      return function () { clearTimeout(t); };
    }, [state]);

    React.useEffect(function () {
      if (state !== "done" || !props.resetAfter) return;
      var t = setTimeout(function () { set("idle"); }, props.resetAfter);
      return function () { clearTimeout(t); };
    }, [state]);

    var face;
    if (state === "loading" && anim === "morph") face = h(Spinner);
    else if (state === "loading") face = h(F, null, h(Spinner, { size: size === "sm" ? 14 : 16 }), h("span", null, props.label));
    else if (state === "done") face = h(F, null,
      h("span", { className: "wt-action-icon" }, iconNode(props.doneIcon || "check", size === "sm" ? 16 : 18)),
      h("span", null, props.doneLabel));
    else face = h(F, null, iconNode(props.icon, size === "sm" ? 16 : 18), h("span", null, props.label));

    return h(F, null,
      h("button", {
        ref: ref, type: "button", onClick: click,
        "aria-disabled": state === "idle" || (state === "done" && props.undoable) ? undefined : "true",
        "aria-pressed": props.undoable ? state === "done" : undefined,
        title: state === "done" && props.undoable ? (props.undoHint || "Click to undo") : undefined,
        className: cx("wt-btn", "wt-btn-" + (state === "done" ? doneVariant : variant), state === "done" && props.undoable && "is-undoable", size === "sm" && "wt-btn-sm",
          "wt-action", "is-" + state, "anim-" + anim, props.className)
      }, h("span", { className: "wt-action-face", key: state }, face)),
      h(Live, null, state === "done" ? props.doneLabel : state === "loading" ? (props.loadingLabel || "Working") : ""));
  }

  function ProgressButton(props) {
    var st = React.useState("idle"), state = st[0], set = st[1];
    var pr = React.useState(0), p = pr[0], setP = pr[1];
    var size = props.size || "md";
    function click() {
      if (state === "running" || state === "done") return;
      setP(0); set("running");
      Promise.resolve(props.onAction ? props.onAction(function (v) { setP(Math.max(0, Math.min(100, v))); }) : null)
        .then(function () { setP(100); return wait(250); })
        .then(function () { set("done"); }, function () { set("error"); });
    }
    var label, icon = null;
    if (state === "running") label = (props.runningLabel || props.label) + " " + Math.round(p) + "%";
    else if (state === "done") { label = props.doneLabel || "Done"; icon = "check"; }
    else if (state === "error") { label = props.errorLabel || "Try again"; icon = "triangle-alert"; }
    else { label = props.label; icon = props.icon; }
    return h(F, null,
      h("button", {
        type: "button", onClick: click,
        "aria-disabled": state === "running" || state === "done" ? "true" : undefined,
        className: cx("wt-btn", "wt-btn-" + (state === "error" ? "danger" : (props.variant || "secondary")), size === "sm" && "wt-btn-sm", "wt-progress", "is-" + state, props.className)
      },
        h("span", { className: "wt-progress-fill", "aria-hidden": "true", style: { width: (state === "running" || state === "done" ? p : 0) + "%" } }),
        h("span", { className: "wt-action-face", key: state }, iconNode(icon, size === "sm" ? 16 : 18), h("span", null, label))),
      h(Live, null, state === "done" ? label : state === "error" ? label : ""));
  }

  function TrashLid(props) {
    return h("svg", { className: "wt-trash", width: props.size, height: props.size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" },
      h("g", { className: "wt-trash-lid" }, h("path", { d: "M3 6h18" }), h("path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" })),
      h("path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }), h("path", { d: "M10 11v6" }), h("path", { d: "M14 11v6" }));
  }

  function HoldButton(props) {
    var duration = props.duration || 1000;
    var st = React.useState("idle"), state = st[0], set = st[1];
    var dim = React.useState(null), box = dim[0], setBox = dim[1];
    var ref = React.useRef(null), timer = React.useRef(null);
    React.useLayoutEffect(function () {
      var el = ref.current;
      function measure() { setBox({ w: el.offsetWidth, h: el.offsetHeight }); }
      measure();
      if (typeof ResizeObserver === "undefined") return;
      var ro = new ResizeObserver(measure); ro.observe(el);
      return function () { ro.disconnect(); };
    }, []);
    function start(e) {
      if (state !== "idle") return;
      if (e && e.type === "pointerdown" && e.button !== 0) return;
      set("holding");
      timer.current = setTimeout(function () { set("done"); if (props.onConfirm) props.onConfirm(); }, duration);
    }
    function cancel() {
      if (state !== "holding") return;
      clearTimeout(timer.current); set("idle");
    }
    React.useEffect(function () { return function () { clearTimeout(timer.current); }; }, []);
    var ring = box && box.w > 0 ? h("svg", { className: "wt-hold-ring", width: box.w, height: box.h, "aria-hidden": "true" },
      h("rect", { x: 1, y: 1, width: box.w - 2, height: box.h - 2, rx: (box.h - 2) / 2, pathLength: 100,
        style: { strokeDashoffset: state === "idle" ? 100 : 0, transitionDuration: state === "holding" ? duration + "ms" : "200ms" } })) : null;
    return h(F, null,
      h("button", {
        ref: ref, type: "button",
        className: cx("wt-btn", "wt-btn-danger", props.size === "sm" && "wt-btn-sm", "wt-hold", "is-" + state, props.className),
        "aria-disabled": state === "done" ? "true" : undefined,
        "aria-describedby": props.hintId,
        onPointerDown: start, onPointerUp: cancel, onPointerLeave: cancel, onPointerCancel: cancel,
        onKeyDown: function (e) { if ((e.key === "Enter" || e.key === " ") && !e.repeat) { e.preventDefault(); start(e); } },
        onKeyUp: function (e) { if (e.key === "Enter" || e.key === " ") cancel(); },
        onClick: function (e) { e.preventDefault(); }
      }, ring, h(TrashLid, { size: props.size === "sm" ? 16 : 18 }),
        h("span", { className: "wt-action-face", key: state === "done" ? "d" : "i" }, state === "done" ? (props.doneLabel || "Deleted") : (props.label || "Hold to delete"))),
      h(Live, null, state === "done" ? (props.doneLabel || "Deleted") : ""));
  }

  function UndoButton(props) {
    var duration = props.duration || 5000;
    var st = React.useState("idle"), state = st[0], set = st[1];
    var undoRef = React.useRef(null), btnRef = React.useRef(null);
    React.useEffect(function () {
      if (state === "pending") {
        if (undoRef.current) undoRef.current.focus();
        var t = setTimeout(function () { set("committed"); if (props.onCommit) props.onCommit(); }, duration);
        return function () { clearTimeout(t); };
      }
    }, [state]);
    if (state === "idle") return h(F, null,
      h("button", { ref: btnRef, type: "button", className: cx("wt-btn", "wt-btn-danger", props.size === "sm" && "wt-btn-sm", props.className),
        onClick: function () { set("pending"); if (props.onDelete) props.onDelete(); } },
        h(Icon, { name: "trash-2", size: props.size === "sm" ? 16 : 18 }), h("span", null, props.label || "Delete")),
      h(Live, null, ""));
    return h(F, null,
      h("span", { className: cx("wt-undo", "is-" + state, props.size === "sm" && "wt-undo-sm", props.className) },
        h("span", { className: "wt-undo-text" }, h(Icon, { name: "check", size: 16 }), props.doneLabel || "Deleted"),
        state === "pending" ? h("button", { ref: undoRef, type: "button", className: "wt-undo-btn",
          onClick: function () { set("idle"); if (props.onUndo) props.onUndo(); } },
          h(Icon, { name: "rotate-ccw", size: 16 }), props.undoLabel || "Undo") : null,
        state === "pending" ? h("span", { className: "wt-undo-timer", "aria-hidden": "true", style: { animationDuration: duration + "ms" } }) : null),
      h(Live, null, state === "pending" ? (props.doneLabel || "Deleted") + ". Undo available." : ""));
  }

  function ReactionButton(props) {
    var kind = props.kind || "star";
    var ps = React.useState(!!props.defaultPressed), pressed = ps[0], setPressed = ps[1];
    var cs = React.useState(props.count), count = cs[0], setCount = cs[1];
    var ds = React.useState(0), bump = ds[0], setBump = ds[1];
    var dir = React.useRef("up");
    var icon = kind === "heart" ? "heart" : kind === "bookmark" ? "bookmark" : "star";
    function click() {
      var next = !pressed;
      setPressed(next);
      if (typeof count === "number") { dir.current = next ? "up" : "down"; setCount(count + (next ? 1 : -1)); }
      if (next) setBump(bump + 1);
      if (props.onChange) props.onChange(next);
    }
    var dots = [];
    if (pressed && bump && kind !== "bookmark") for (var i = 0; i < 8; i++) dots.push(h("i", { key: i, style: { "--a": (i * 45) + "deg" } }));
    var hasCount = typeof count === "number";
    return h("button", {
      type: "button", "aria-pressed": pressed, "aria-label": props.label + (hasCount ? ", " + count : ""), onClick: click,
      className: cx("wt-react", "wt-react-" + kind, pressed && "is-on", hasCount && "has-count", props.className)
    },
      h("span", { className: "wt-react-icon", key: pressed ? "on" + bump : "off" },
        h(Icon, { name: icon, size: 20, fill: pressed ? "currentColor" : "none" })),
      dots.length ? h("span", { className: "wt-burst", key: "b" + bump, "aria-hidden": "true" }, dots) : null,
      hasCount ? h("span", { className: "wt-count", "aria-hidden": "true" }, h("span", { key: count, className: "wt-count-n wt-roll-" + dir.current }, count)) : null);
  }


  /* ---------- Building blocks ---------- */
  function IconDisc(props) {
    var size = props.size || 40;
    return h("span", { className: cx("wt-disc", "wt-disc-" + (props.tone || "neutral"), props.className), style: { width: size, height: size }, "aria-hidden": props.label ? undefined : "true", role: props.label ? "img" : undefined, "aria-label": props.label },
      iconNode(props.icon, Math.round(size / 2)));
  }

  var MONTHS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  function DateBlock(props) {
    var month = props.month, day = props.day;
    if (props.date) { var d = new Date(props.date); month = MONTHS[d.getMonth()]; day = d.getDate(); }
    return h("span", { className: cx("wt-date", props.className), role: "img", "aria-label": props.label || (day + " " + month) },
      h("span", { className: "wt-date-m", "aria-hidden": "true" }, month), h("span", { className: "wt-date-d", "aria-hidden": "true" }, day));
  }

  function MetaList(props) {
    return h("ul", { className: cx("wt-meta", props.className) }, (props.items || []).map(function (it, i) {
      return h("li", { key: i }, it.icon ? iconNode(it.icon, 16) : null, h("span", null, it.text));
    }));
  }

  function Progress(props) {
    var max = props.max || 100, v = Math.max(0, Math.min(max, props.value || 0)), pct = (v / max) * 100;
    return h("div", { className: cx("wt-progressbar-wrap", props.className) },
      h("div", { className: "wt-progressbar", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": max, "aria-valuenow": v, "aria-label": props.label || "Progress" },
        h("i", { style: { width: pct + "%" } })),
      props.showValue ? h("span", { className: "wt-progressbar-value" }, Math.round(pct) + "%") : null);
  }

  function Checklist(props) {
    var controlled = Array.isArray(props.done);
    var st = React.useState((props.items || []).map(function (it) { return !!it.done; })), own = st[0], setOwn = st[1];
    var done = controlled ? props.done : own;
    var baseId = React.useId();
    function toggle(i) {
      var next = done.slice(); next[i] = !next[i];
      if (!controlled) setOwn(next);
      if (props.onChange) props.onChange(next);
    }
    return h("ul", { className: cx("wt-checklist", props.className), "aria-label": props.label }, (props.items || []).map(function (it, i) {
      var id = baseId + "-" + i;
      return h("li", { key: i, className: done[i] ? "is-done" : "" },
        h("input", { type: "checkbox", id: id, className: "wt-check-input", checked: !!done[i], onChange: function () { toggle(i); } }),
        h("label", { htmlFor: id }, h("span", { className: "wt-check-box", "aria-hidden": "true" }, h(Icon, { name: "check", size: 14 })), h("span", { className: "wt-check-text" }, it.label)));
    }));
  }
  Checklist.count = function (done) { return done.filter(Boolean).length; };

  function initials(name) {
    var parts = String(name || "").trim().split(/\s+/);
    return ((parts[0] || "")[0] || "").toUpperCase() + ((parts.length > 1 ? parts[parts.length - 1][0] : "") || "").toUpperCase();
  }
  function Avatar(props) {
    var size = props.size || 48;
    return h("span", { className: cx("wt-avatar", props.className), style: { width: size, height: size, fontSize: Math.round(size * 0.4) }, role: "img", "aria-label": props.name },
      h("span", { "aria-hidden": "true" }, props.initials || initials(props.name)));
  }

  function Stat(props) {
    var dir = props.trendDirection || "up";
    return h("div", { className: cx("wt-stat", props.className) },
      props.label ? h("span", { className: "wt-stat-label" }, props.label) : null,
      h("span", { className: "wt-stat-value" }, h("span", { className: "wt-stat-num", key: String(props.value) }, props.value), props.unit ? h("small", null, props.unit) : null),
      props.trend ? h("span", { className: "wt-stat-trend" },
        dir === "flat" ? null : h(Icon, { name: "arrow-right", size: 14, style: { transform: dir === "down" ? "rotate(45deg)" : "rotate(-45deg)" } }), props.trend) : null);
  }

  function Sparkline(props) {
    var data = props.data || [], w = 290, hgt = props.height || 56, pad = 5;
    if (data.length < 2) return null;
    var min = Math.min.apply(null, data), max = Math.max.apply(null, data), span = (max - min) || 1;
    var pts = data.map(function (v, i) { return [pad + i * (w - 2 * pad) / (data.length - 1), hgt - pad - (v - min) / span * (hgt - 2 * pad)]; });
    var last = pts[pts.length - 1];
    return h("svg", { className: cx("wt-spark", props.className), viewBox: "0 0 " + w + " " + hgt, preserveAspectRatio: "none", style: { height: hgt }, role: "img", "aria-label": props.label || ("Trend from " + data[0] + " to " + data[data.length - 1]) },
      h("polyline", { points: pts.map(function (p) { return p.join(","); }).join(" "), vectorEffect: "non-scaling-stroke" }),
      h("circle", { cx: last[0], cy: last[1], r: 4 }));
  }

  function SeatMap(props) {
    var total = props.total || 40, taken = Math.min(total, props.taken || 0), cols = props.columns || 10, cells = [];
    for (var i = 0; i < total; i++) cells.push(h("i", { key: i, className: i >= taken ? "free" : (props.mine && i === taken - 1 ? "mine" : "") }));
    return h("div", { className: cx("wt-seats", props.className), style: { gridTemplateColumns: "repeat(" + cols + ", 1fr)" }, role: "img", "aria-label": props.label || (taken + " of " + total + " places taken, " + (total - taken) + " left") }, cells);
  }

  /* ---------- Status pieces ---------- */
  function CountBadge(props) {
    var max = props.max || 99, n = props.count || 0;
    if (!n && !props.showZero) return null;
    return h("span", { className: cx("wt-count-badge", props.className), "aria-label": props.label ? (n + " " + props.label) : undefined },
      h("span", { key: n, className: "wt-count-badge-n", "aria-hidden": props.label ? "true" : undefined }, n > max ? max + "+" : n));
  }

  function Status(props) {
    var tone = props.tone || "neutral";
    return h("span", { className: cx("wt-status", "wt-status-" + tone, props.className) }, h("span", { className: "wt-status-dot", "aria-hidden": "true" }), props.children);
  }

  function Tag(props) {
    if (props.onRemove) {
      return h("span", { className: cx("wt-tag", props.className) }, h("span", null, props.children),
        h("button", { type: "button", className: "wt-tag-x", onClick: props.onRemove, "aria-label": "Remove " + (props.label || (typeof props.children === "string" ? props.children : "")) }, h(Icon, { name: "x", size: 14 })));
    }
    return h("button", { type: "button", className: cx("wt-tag", "wt-tag-toggle", props.selected && "is-on", props.className), "aria-pressed": !!props.selected, onClick: props.onClick },
      props.selected ? h(Icon, { name: "check", size: 14 }) : null, h("span", null, props.children));
  }


  /* ---------- Form controls ---------- */
  function FieldShell(props) {
    return h("div", { className: cx("wt-field", props.className) },
      props.label ? h("label", { className: "wt-field-label", htmlFor: props.id }, props.label) : null,
      props.children,
      props.hint ? h("span", { className: "wt-field-hint", id: props.id + "-hint" }, props.hint) : null,
      props.error ? h("span", { className: "wt-field-error", id: props.id + "-error" }, h(Icon, { name: "triangle-alert", size: 16 }), h("span", null, props.error)) : null);
  }
  function describe(id, props) {
    var d = [props.hint && id + "-hint", props.error && id + "-error"].filter(Boolean).join(" ");
    return d || undefined;
  }

  function Checkbox(props) {
    var auto = React.useId(), id = props.id || auto, ref = React.useRef(null);
    React.useEffect(function () { if (ref.current) ref.current.indeterminate = !!props.indeterminate; }, [props.indeterminate]);
    var rest = omit(props, ["label", "hint", "indeterminate", "className", "id"]);
    rest.type = "checkbox"; rest.id = id; rest.ref = ref; rest.className = "wt-checkbox";
    if (props.hint) rest["aria-describedby"] = id + "-hint";
    return h("div", { className: cx("wt-choice", props.className) },
      h("span", { className: "wt-checkbox-wrap" }, h("input", rest),
        h(Icon, { name: "check", size: 14, className: "wt-checkbox-tick" }), h("span", { className: "wt-checkbox-dash", "aria-hidden": "true" })),
      h("span", { className: "wt-choice-text" },
        h("label", { htmlFor: id, className: "wt-choice-label" }, props.label),
        props.hint ? h("span", { className: "wt-field-hint", id: id + "-hint" }, props.hint) : null));
  }

  function RadioGroup(props) {
    var auto = React.useId(), name = props.name || auto;
    var st = React.useState(props.defaultValue), own = st[0], setOwn = st[1];
    var value = props.value !== undefined ? props.value : own;
    return h("fieldset", { className: cx("wt-fieldset", props.className), "aria-describedby": props.hint ? name + "-hint" : undefined },
      h("legend", { className: "wt-field-label" }, props.legend),
      props.hint ? h("span", { className: "wt-field-hint", id: name + "-hint" }, props.hint) : null,
      h("div", { className: cx("wt-radio-list", props.inline && "is-inline") }, (props.options || []).map(function (o) {
        var id = name + "-" + o.value;
        return h("div", { className: "wt-choice", key: o.value },
          h("input", { type: "radio", className: "wt-radio", id: id, name: name, value: o.value, checked: value === o.value, disabled: o.disabled,
            "aria-describedby": o.hint ? id + "-hint" : undefined,
            onChange: function () { if (props.value === undefined) setOwn(o.value); if (props.onChange) props.onChange(o.value); } }),
          h("span", { className: "wt-choice-text" },
            h("label", { htmlFor: id, className: "wt-choice-label" }, o.label),
            o.hint ? h("span", { className: "wt-field-hint", id: id + "-hint" }, o.hint) : null));
      })));
  }

  function Switch(props) {
    var auto = React.useId(), id = props.id || auto;
    var st = React.useState(!!props.defaultChecked), own = st[0], setOwn = st[1];
    var on = props.checked !== undefined ? props.checked : own;
    function flip() { if (props.disabled) return; var n = !on; if (props.checked === undefined) setOwn(n); if (props.onChange) props.onChange(n); }
    return h("div", { className: cx("wt-switch-row", props.className) },
      h("span", { className: "wt-choice-text" },
        h("span", { className: "wt-choice-label", id: id + "-label", onClick: flip }, props.label),
        props.hint ? h("span", { className: "wt-field-hint", id: id + "-hint" }, props.hint) : null),
      h("button", { type: "button", role: "switch", "aria-checked": on, "aria-labelledby": id + "-label", "aria-describedby": props.hint ? id + "-hint" : undefined,
        disabled: props.disabled, className: "wt-switch",
        onClick: flip },
        h("span", { className: "wt-switch-knob" }, h(Icon, { name: "check", size: 12 }))));
  }

  function Select(props) {
    var auto = React.useId(), id = props.id || auto;
    var rest = omit(props, ["label", "hint", "error", "options", "placeholder", "className", "id"]);
    rest.id = id; rest.className = "wt-input wt-select";
    if (props.error) rest["aria-invalid"] = "true";
    rest["aria-describedby"] = describe(id, props);
    if (props.placeholder && rest.value === undefined && rest.defaultValue === undefined) rest.defaultValue = "";
    return h(FieldShell, { id: id, label: props.label, hint: props.hint, error: props.error, className: props.className },
      h("div", { className: "wt-select-wrap" },
        h.apply(null, ["select", rest].concat(
          props.placeholder ? [h("option", { key: "_", value: "", disabled: true }, props.placeholder)] : [],
          (props.options || []).map(function (o) { o = typeof o === "string" ? { value: o, label: o } : o; return h("option", { key: o.value, value: o.value }, o.label); }))),
        h("span", { className: "wt-select-chevron", "aria-hidden": "true" }, h(Icon, { name: "chevron-down", size: 18 }))));
  }

  function Textarea(props) {
    var auto = React.useId(), id = props.id || auto;
    var st = React.useState(String(props.defaultValue || "")), own = st[0], setOwn = st[1];
    var text = props.value !== undefined ? String(props.value) : own;
    var rest = omit(props, ["label", "hint", "error", "className", "id", "onChange"]);
    rest.id = id; rest.className = "wt-input wt-textarea";
    if (props.error) rest["aria-invalid"] = "true";
    rest["aria-describedby"] = [describe(id, props), props.maxLength ? id + "-count" : null].filter(Boolean).join(" ") || undefined;
    rest.onChange = function (e) { if (props.value === undefined) setOwn(e.target.value); if (props.onChange) props.onChange(e); };
    var near = props.maxLength && text.length > props.maxLength * 0.9;
    return h(FieldShell, { id: id, label: props.label, hint: props.hint, error: props.error, className: props.className },
      h("textarea", rest),
      props.maxLength ? h("span", { className: cx("wt-textarea-count", near && "is-near"), id: id + "-count", "aria-live": near ? "polite" : "off" }, text.length + " / " + props.maxLength) : null);
  }

  /* ---------- Navigation ---------- */
  function Tabs(props) {
    var tabs = props.tabs || [];
    var auto = React.useId();
    var st = React.useState(props.defaultTab || (tabs[0] && tabs[0].id)), active = st[0], setActive = st[1];
    var refs = React.useRef({});
    function go(i) { var t = tabs[(i + tabs.length) % tabs.length]; setActive(t.id); if (props.onChange) props.onChange(t.id); var el = refs.current[t.id]; if (el) el.focus(); }
    function key(e, i) {
      if (e.key === "ArrowRight") { e.preventDefault(); go(i + 1); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); go(i - 1); }
      else if (e.key === "Home") { e.preventDefault(); go(0); }
      else if (e.key === "End") { e.preventDefault(); go(tabs.length - 1); }
    }
    var current = tabs.filter(function (t) { return t.id === active; })[0] || tabs[0];
    return h("div", { className: cx("wt-tabs", props.className) },
      h("div", { className: "wt-tablist", role: "tablist", "aria-label": props.label }, tabs.map(function (t, i) {
        var sel = t.id === active;
        return h("button", { key: t.id, ref: function (el) { refs.current[t.id] = el; }, type: "button", role: "tab", id: auto + "-tab-" + t.id,
          "aria-selected": sel, "aria-controls": auto + "-panel-" + t.id, tabIndex: sel ? 0 : -1, className: cx("wt-tab", sel && "is-active"),
          onClick: function () { setActive(t.id); if (props.onChange) props.onChange(t.id); }, onKeyDown: function (e) { key(e, i); } },
          t.icon ? iconNode(t.icon, 16) : null, h("span", null, t.label),
          typeof t.count === "number" ? h("span", { className: "wt-tab-count" }, t.count) : null);
      })),
      current ? h("div", { className: "wt-tabpanel", role: "tabpanel", id: auto + "-panel-" + current.id, "aria-labelledby": auto + "-tab-" + current.id, tabIndex: 0, key: current.id }, current.content) : null);
  }

  /* ---------- Overlays ---------- */
  function Dialog(props) {
    var ref = React.useRef(null), titleId = React.useId();
    React.useEffect(function () {
      var d = ref.current; if (!d) return;
      if (props.open && !d.open) d.showModal();
      if (!props.open && d.open) d.close();
    }, [props.open]);
    React.useEffect(function () {
      var d = ref.current; if (!d) return;
      function onClose() { if (props.onClose) props.onClose(); }
      d.addEventListener("close", onClose);
      return function () { d.removeEventListener("close", onClose); };
    }, [props.onClose]);
    return h("dialog", { ref: ref, className: cx("wt-dialog", props.className), "aria-labelledby": titleId,
      onClick: function (e) { if (e.target === ref.current && props.dismissable !== false) ref.current.close(); } },
      h("div", { className: "wt-dialog-inner" },
        h("div", { className: "wt-dialog-head" },
          h("h2", { className: "wt-dialog-title", id: titleId }, props.title),
          h(Button, { variant: "ghost", size: "sm", icon: "x", "aria-label": "Close", onClick: function () { ref.current.close(); } })),
        props.children ? h("div", { className: "wt-dialog-body" }, props.children) : null,
        props.footer ? h("div", { className: "wt-dialog-footer" }, props.footer) : null));
  }

  var toastListeners = [], toastSeq = 0;
  function toast(message, opts) {
    opts = opts || {};
    var t = { id: ++toastSeq, message: message, tone: opts.tone || "neutral", actionLabel: opts.actionLabel, onAction: opts.onAction,
      duration: opts.duration || (opts.actionLabel ? 6000 : 4000) };
    toastListeners.forEach(function (l) { l(t); });
    return t.id;
  }
  function Toaster(props) {
    var st = React.useState([]), list = st[0], set = st[1];
    var timers = React.useRef({});
    function remove(id) { clearTimeout(timers.current[id]); set(function (l) { return l.filter(function (t) { return t.id !== id; }); }); }
    React.useEffect(function () {
      function add(t) {
        set(function (l) { return l.concat([t]).slice(-(props.max || 3)); });
        timers.current[t.id] = setTimeout(function () { remove(t.id); }, t.duration);
      }
      toastListeners.push(add);
      return function () { toastListeners = toastListeners.filter(function (l) { return l !== add; }); };
    }, []);
    return h("div", { className: "wt-toaster", role: "region", "aria-label": "Notifications" },
      h("div", { "aria-live": "polite", className: "wt-toast-stack" }, list.map(function (t) {
        return h("div", { key: t.id, className: cx("wt-toast", "wt-toast-" + t.tone) },
          t.tone === "success" ? h(Icon, { name: "check", size: 18 }) : t.tone === "danger" ? h(Icon, { name: "triangle-alert", size: 18 }) : null,
          h("span", { className: "wt-toast-msg" }, t.message),
          t.actionLabel ? h("button", { type: "button", className: "wt-toast-action", onClick: function () { if (t.onAction) t.onAction(); remove(t.id); } }, t.actionLabel) : null,
          h("button", { type: "button", className: "wt-toast-x", "aria-label": "Dismiss", onClick: function () { remove(t.id); } }, h(Icon, { name: "x", size: 16 })));
      })));
  }

  function Tooltip(props) {
    var st = React.useState(false), open = st[0], set = st[1], id = React.useId(), t = React.useRef(null);
    function show() { clearTimeout(t.current); t.current = setTimeout(function () { set(true); }, props.delay === undefined ? 250 : props.delay); }
    function hide() { clearTimeout(t.current); set(false); }
    React.useEffect(function () {
      if (!open) return;
      function esc(e) { if (e.key === "Escape") hide(); }
      document.addEventListener("keydown", esc); return function () { document.removeEventListener("keydown", esc); };
    }, [open]);
    var child = React.Children.only(props.children);
    var trigger = React.cloneElement(child, { "aria-describedby": id });
    return h("span", { className: "wt-tooltip-wrap", onMouseEnter: show, onMouseLeave: hide, onFocus: show, onBlur: hide },
      trigger, h("span", { role: "tooltip", id: id, className: cx("wt-tooltip", "wt-tooltip-" + (props.side || "top"), open && "is-open") }, props.label));
  }

  function DropdownMenu(props) {
    var st = React.useState(false), open = st[0], setOpen = st[1];
    var wrap = React.useRef(null), menu = React.useRef(null), id = React.useId();
    function focusTrigger() { var t = wrap.current && wrap.current.querySelector(".wt-menu-trigger"); if (t) t.focus(); }
    var items = (props.items || []);
    function focusItem(i) { var els = menu.current ? menu.current.querySelectorAll('[role="menuitem"]') : []; if (els.length) els[(i + els.length) % els.length].focus(); }
    React.useEffect(function () {
      if (!open) return;
      requestAnimationFrame(function () { focusItem(0); });
      function out(e) { if (wrap.current && !wrap.current.contains(e.target)) setOpen(false); }
      document.addEventListener("mousedown", out); return function () { document.removeEventListener("mousedown", out); };
    }, [open]);
    function keys(e) {
      var els = Array.prototype.slice.call(menu.current.querySelectorAll('[role="menuitem"]')), i = els.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); focusItem(i + 1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); focusItem(i - 1); }
      else if (e.key === "Home") { e.preventDefault(); focusItem(0); }
      else if (e.key === "End") { e.preventDefault(); focusItem(els.length - 1); }
      else if (e.key === "Escape") { e.preventDefault(); setOpen(false); focusTrigger(); }
      else if (e.key === "Tab") setOpen(false);
    }
    return h("div", { className: "wt-menu-wrap", ref: wrap },
      h(Button, { variant: props.variant || "ghost", size: props.size, icon: props.icon || (props.label ? null : "ellipsis"), iconEnd: props.label ? "chevron-down" : null,
        "aria-label": props.label ? undefined : (props.ariaLabel || "More actions"), "aria-haspopup": "menu", "aria-expanded": open, "aria-controls": id,
        onClick: function () { setOpen(!open); }, onKeyDown: function (e) { if (e.key === "ArrowDown" && !open) { e.preventDefault(); setOpen(true); } },
        className: cx("wt-menu-trigger", open && "is-open") }, props.label),
      open ? h("div", { ref: menu, id: id, role: "menu", className: cx("wt-menu", props.align === "end" && "is-end"), onKeyDown: keys },
        items.map(function (it, i) {
          if (it.divider) return h("div", { key: "d" + i, role: "separator", className: "wt-menu-sep" });
          return h("button", { key: i, type: "button", role: "menuitem", tabIndex: -1, className: cx("wt-menu-item", it.danger && "is-danger"), disabled: it.disabled,
            onClick: function () { setOpen(false); focusTrigger(); if (it.onSelect) it.onSelect(); } },
            it.icon ? iconNode(it.icon, 16) : h("span", { className: "wt-menu-gap" }), h("span", null, it.label),
            it.shortcut ? h("kbd", null, it.shortcut) : null);
        })) : null);
  }

  window.Wattle = Object.assign(window.Wattle || {}, { Button: Button, Input: Input, Card: Card, Icon: Icon, Badge: Badge, ActionButton: ActionButton, ProgressButton: ProgressButton, HoldButton: HoldButton, UndoButton: UndoButton, ReactionButton: ReactionButton, IconDisc: IconDisc, DateBlock: DateBlock, MetaList: MetaList, Progress: Progress, Checklist: Checklist, Avatar: Avatar, Stat: Stat, Sparkline: Sparkline, SeatMap: SeatMap, CountBadge: CountBadge, Status: Status, Tag: Tag, Checkbox: Checkbox, RadioGroup: RadioGroup, Switch: Switch, Select: Select, Textarea: Textarea, Tabs: Tabs, Dialog: Dialog, Toaster: Toaster, Tooltip: Tooltip, DropdownMenu: DropdownMenu, toast: toast });
})();

/* @ds-bundle: {"format":4,"namespace":"Wattle","components":[{"name":"Button"},{"name":"Input"},{"name":"Card"},{"name":"Icon"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(" "); }
  function omit(props, keys) { var o = {}; for (var k in props) if (keys.indexOf(k) < 0) o[k] = props[k]; return o; }

  /* Lucide v0.460.0 icon nodes (ISC licence), the same set as assets/Icons */
  var ICONS = {"search":[["circle",{"cx":"11","cy":"11","r":"8"}],["path",{"d":"m21 21-4.3-4.3"}]],"plus":[["path",{"d":"M5 12h14"}],["path",{"d":"M12 5v14"}]],"x":[["path",{"d":"M18 6 6 18"}],["path",{"d":"m6 6 12 12"}]],"check":[["path",{"d":"M20 6 9 17l-5-5"}]],"chevron-down":[["path",{"d":"m6 9 6 6 6-6"}]],"chevron-right":[["path",{"d":"m9 18 6-6-6-6"}]],"arrow-left":[["path",{"d":"m12 19-7-7 7-7"}],["path",{"d":"M19 12H5"}]],"arrow-right":[["path",{"d":"M5 12h14"}],["path",{"d":"m12 5 7 7-7 7"}]],"menu":[["line",{"x1":"4","x2":"20","y1":"12","y2":"12"}],["line",{"x1":"4","x2":"20","y1":"6","y2":"6"}],["line",{"x1":"4","x2":"20","y1":"18","y2":"18"}]],"settings":[["path",{"d":"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"}],["circle",{"cx":"12","cy":"12","r":"3"}]],"user":[["path",{"d":"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{"cx":"12","cy":"7","r":"4"}]],"bell":[["path",{"d":"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}],["path",{"d":"M10.3 21a1.94 1.94 0 0 0 3.4 0"}]],"house":[["path",{"d":"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{"d":"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]],"book-open":[["path",{"d":"M12 7v14"}],["path",{"d":"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"}]],"calendar":[["path",{"d":"M8 2v4"}],["path",{"d":"M16 2v4"}],["rect",{"width":"18","height":"18","x":"3","y":"4","rx":"2"}],["path",{"d":"M3 10h18"}]],"trash-2":[["path",{"d":"M3 6h18"}],["path",{"d":"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"}],["path",{"d":"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"}],["line",{"x1":"10","x2":"10","y1":"11","y2":"17"}],["line",{"x1":"14","x2":"14","y1":"11","y2":"17"}]],"pencil":[["path",{"d":"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{"d":"m15 5 4 4"}]],"upload":[["path",{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{"points":"17 8 12 3 7 8"}],["line",{"x1":"12","x2":"12","y1":"3","y2":"15"}]],"download":[["path",{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{"points":"7 10 12 15 17 10"}],["line",{"x1":"12","x2":"12","y1":"15","y2":"3"}]],"info":[["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M12 16v-4"}],["path",{"d":"M12 8h.01"}]],"triangle-alert":[["path",{"d":"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"}],["path",{"d":"M12 9v4"}],["path",{"d":"M12 17h.01"}]],"eye":[["path",{"d":"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{"cx":"12","cy":"12","r":"3"}]],"log-out":[["path",{"d":"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}],["polyline",{"points":"16 17 21 12 16 7"}],["line",{"x1":"21","x2":"9","y1":"12","y2":"12"}]],"filter":[["polygon",{"points":"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]};

  function Icon(props) {
    var size = props.size || 24;
    var nodes = ICONS[props.name];
    if (!nodes) return null;
    var rest = omit(props, ["name", "size", "label", "className"]);
    rest.xmlns = "http://www.w3.org/2000/svg";
    rest.width = size; rest.height = size; rest.viewBox = "0 0 24 24";
    rest.fill = "none"; rest.stroke = "currentColor"; rest.strokeWidth = 1.5;
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
    var rest = omit(props, ["variant", "size", "className", "children", "type", "icon", "iconEnd"]);
    rest.type = props.type || "button";
    rest.className = cx("wt-btn", "wt-btn-" + variant, size === "sm" && "wt-btn-sm", iconOnly && "wt-btn-icon", props.className);
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
    var rest = omit(props, ["as", "eyebrow", "title", "footer", "selected", "className", "children", "icon"]);
    rest.className = cx("wt-card", props.selected && "wt-card-selected", props.className);
    return h(Tag, rest,
      props.icon ? h("span", { className: "wt-card-icon" }, iconNode(props.icon, 20)) : null,
      props.eyebrow ? h("span", { className: "wt-card-eyebrow" }, props.eyebrow) : null,
      props.title ? h("h3", { className: "wt-card-title" }, props.title) : null,
      props.children ? h("div", { className: "wt-card-body" }, props.children) : null,
      props.footer ? h("div", { className: "wt-card-footer" }, props.footer) : null
    );
  }

  window.Wattle = Object.assign(window.Wattle || {}, { Button: Button, Input: Input, Card: Card, Icon: Icon });
})();

/* @ds-bundle: {"format":4,"namespace":"Wattle","components":[{"name":"Button"},{"name":"Input"},{"name":"Card"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(" "); }
  function omit(props, keys) { var o = {}; for (var k in props) if (keys.indexOf(k) < 0) o[k] = props[k]; return o; }

  function Button(props) {
    var variant = props.variant || "secondary";
    var size = props.size || "md";
    var rest = omit(props, ["variant", "size", "className", "children", "type"]);
    rest.type = props.type || "button";
    rest.className = cx("wt-btn", "wt-btn-" + variant, size === "sm" && "wt-btn-sm", props.className);
    return h("button", rest, props.children);
  }

  function Input(props) {
    var autoId = React.useId();
    var id = props.id || autoId;
    var hintId = id + "-hint";
    var errorId = id + "-error";
    var rest = omit(props, ["label", "hint", "error", "className", "id"]);
    rest.id = id;
    rest.className = cx("wt-input", props.className);
    if (props.error) rest["aria-invalid"] = "true";
    var describedBy = [props.hint && hintId, props.error && errorId].filter(Boolean).join(" ");
    if (describedBy) rest["aria-describedby"] = describedBy;
    return h("div", { className: "wt-field" },
      props.label ? h("label", { className: "wt-field-label", htmlFor: id }, props.label) : null,
      h("input", rest),
      props.hint ? h("span", { className: "wt-field-hint", id: hintId }, props.hint) : null,
      props.error ? h("span", { className: "wt-field-error", id: errorId }, props.error) : null
    );
  }

  function Card(props) {
    var Tag = props.as || "section";
    var rest = omit(props, ["as", "eyebrow", "title", "footer", "selected", "className", "children"]);
    rest.className = cx("wt-card", props.selected && "wt-card-selected", props.className);
    return h(Tag, rest,
      props.eyebrow ? h("span", { className: "wt-card-eyebrow" }, props.eyebrow) : null,
      props.title ? h("h3", { className: "wt-card-title" }, props.title) : null,
      props.children ? h("div", { className: "wt-card-body" }, props.children) : null,
      props.footer ? h("div", { className: "wt-card-footer" }, props.footer) : null
    );
  }

  window.Wattle = Object.assign(window.Wattle || {}, { Button: Button, Input: Input, Card: Card });
})();

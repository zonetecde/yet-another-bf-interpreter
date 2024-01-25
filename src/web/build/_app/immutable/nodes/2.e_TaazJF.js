import { e as identity, s as safe_not_equal, n as noop, o as onMount, d as binding_callbacks, r as run_all, f as add_flush_callback, g as add_render_callback } from "../chunks/scheduler.IZExxfgS.js";
import { S as SvelteComponent, i as init, e as element, s as space, y as svg_element, c as claim_element, a as children, d as detach, f as claim_space, z as claim_svg_element, A as get_svelte_dataset, o as attr, p as set_style, g as insert_hydration, h as append_hydration, B as destroy_each, t as text, b as claim_text, j as set_data, C as listen, D as set_input_value, E as to_number, F as bind, u as create_component, v as claim_component, w as mount_component, n as transition_in, l as transition_out, m as check_outros, x as destroy_component, G as create_bidirectional_transition, q as group_outros, H as HtmlTagHydration, I as claim_html_tag } from "../chunks/index.zqg2Rxpq.js";
import { e as ensure_array_like, t as toast } from "../chunks/Toaster.svelte_svelte_type_style_lang.Aum9VTgW.js";
import { w as writable } from "../chunks/index.EkDD9cK_.js";
class Api {
  static api = pywebview.api;
}
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function slide(node, { delay = 0, duration = 400, easing = cubicOut, axis = "y" } = {}) {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const primary_property = axis === "y" ? "height" : "width";
  const primary_property_value = parseFloat(style[primary_property]);
  const secondary_properties = axis === "y" ? ["top", "bottom"] : ["left", "right"];
  const capitalized_secondary_properties = secondary_properties.map(
    (e) => `${e[0].toUpperCase()}${e.slice(1)}`
  );
  const padding_start_value = parseFloat(style[`padding${capitalized_secondary_properties[0]}`]);
  const padding_end_value = parseFloat(style[`padding${capitalized_secondary_properties[1]}`]);
  const margin_start_value = parseFloat(style[`margin${capitalized_secondary_properties[0]}`]);
  const margin_end_value = parseFloat(style[`margin${capitalized_secondary_properties[1]}`]);
  const border_width_start_value = parseFloat(
    style[`border${capitalized_secondary_properties[0]}Width`]
  );
  const border_width_end_value = parseFloat(
    style[`border${capitalized_secondary_properties[1]}Width`]
  );
  return {
    delay,
    duration,
    easing,
    css: (t) => `overflow: hidden;opacity: ${Math.min(t * 20, 1) * opacity};${primary_property}: ${t * primary_property_value}px;padding-${secondary_properties[0]}: ${t * padding_start_value}px;padding-${secondary_properties[1]}: ${t * padding_end_value}px;margin-${secondary_properties[0]}: ${t * margin_start_value}px;margin-${secondary_properties[1]}: ${t * margin_end_value}px;border-${secondary_properties[0]}-width: ${t * border_width_start_value}px;border-${secondary_properties[1]}-width: ${t * border_width_end_value}px;`
  };
}
const cursorPosS = 0;
const cursorPos = writable(cursorPosS);
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[16] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let section;
  let p;
  let t0_value = (
    /*element*/
    (ctx[16] ?? "0") + ""
  );
  let t0;
  let t1;
  return {
    c() {
      section = element("section");
      p = element("p");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l(nodes) {
      section = claim_element(nodes, "SECTION", { class: true, style: true });
      var section_nodes = children(section);
      p = claim_element(section_nodes, "P", { class: true });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, t0_value);
      p_nodes.forEach(detach);
      t1 = claim_space(section_nodes);
      section_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(p, "class", "text-3xl font-bold select-none");
      attr(section, "class", "h-full flex justify-center items-center border-l border-r border-black relative");
      set_style(section, "min-width", cellSize + "px");
    },
    m(target, anchor) {
      insert_hydration(target, section, anchor);
      append_hydration(section, p);
      append_hydration(p, t0);
      append_hydration(section, t1);
    },
    p(ctx2, dirty) {
      if (dirty & /*showedElements*/
      4 && t0_value !== (t0_value = /*element*/
      (ctx2[16] ?? "0") + ""))
        set_data(t0, t0_value);
    },
    d(detaching) {
      if (detaching) {
        detach(section);
      }
    }
  };
}
function create_fragment$2(ctx) {
  let div2;
  let div1;
  let div0;
  let t0;
  let svg;
  let path;
  let t1;
  let style;
  let textContent = "::-webkit-scrollbar {\r\n			height: 5px;\r\n		}\r\n\r\n		::-webkit-scrollbar-track {\r\n			background-color: #ffffff;\r\n		}\r\n\r\n		::-webkit-scrollbar-thumb {\r\n			background-color: rgba(0, 0, 0, 0.75);\r\n			border-radius: 10px;\r\n		}";
  let each_value = ensure_array_like(
    /*showedElements*/
    ctx[2]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t0 = space();
      svg = svg_element("svg");
      path = svg_element("path");
      t1 = space();
      style = element("style");
      style.textContent = textContent;
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { style: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      t0 = claim_space(div1_nodes);
      svg = claim_svg_element(div1_nodes, "svg", {
        xmlns: true,
        fill: true,
        viewBox: true,
        "stroke-width": true,
        stroke: true,
        "data-slot": true,
        class: true
      });
      var svg_nodes = children(svg);
      path = claim_svg_element(svg_nodes, "path", {
        "stroke-linecap": true,
        "stroke-linejoin": true,
        d: true
      });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      style = claim_element(div2_nodes, "STYLE", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(style) !== "svelte-1mhdknm")
        style.textContent = textContent;
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "h-full overflow-x-hidden flex items-row border-t-2 border-b-2 bg-white border-black [mask-image:linear-gradient(90deg,#0000,#000,#000,#000,#0000)]");
      attr(path, "stroke-linecap", "round");
      attr(path, "stroke-linejoin", "round");
      attr(path, "d", "m19.5 8.25-7.5 7.5-7.5-7.5");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "fill", "none");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "stroke-width", "1.5");
      attr(svg, "stroke", "skyblue");
      attr(svg, "data-slot", "icon");
      attr(svg, "class", "w-6 h-6 absolute left-1/2 top-[3rem] z-20 bg-blue-700 rounded-full pt-0.5");
      set_style(div1, "height", cellSize + 10 + "px");
      set_style(
        div1,
        "width",
        /*rubanWidth*/
        ctx[1] + "px"
      );
      attr(div2, "class", "w-full flex justify-center");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div0, null);
        }
      }
      ctx[11](div0);
      append_hydration(div1, t0);
      append_hydration(div1, svg);
      append_hydration(svg, path);
      append_hydration(div2, t1);
      append_hydration(div2, style);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*cellSize, showedElements*/
      4) {
        each_value = ensure_array_like(
          /*showedElements*/
          ctx2[2]
        );
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div0, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & /*rubanWidth*/
      2) {
        set_style(
          div1,
          "width",
          /*rubanWidth*/
          ctx2[1] + "px"
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
      destroy_each(each_blocks, detaching);
      ctx[11](null);
    }
  };
}
let cellSize = 85;
function instance$2($$self, $$props, $$invalidate) {
  let showedElements;
  let firstElementRelativeIndex;
  const offsets = {
    575: 1,
    745: 0,
    915: -1,
    1085: -2,
    1425: -4
  };
  let { values = [] } = $$props;
  let paddingElements = 18;
  let ruban;
  onMount(() => {
    updateRibonWidth();
    window.addEventListener("resize", updateRibonWidth);
    return () => {
      window.removeEventListener("resize", updateRibonWidth);
    };
  });
  let rubanWidth = 745;
  let cursorOffset = 0;
  let cursorPosition = -2;
  cursorPos.subscribe((value) => {
    $$invalidate(10, cursorPosition = value);
  });
  function getCursorPosition() {
    const firstCellToCursorLength = 4 * cellSize;
    const cursorIndex = firstElementRelativeIndex + cursorPosition + cursorOffset;
    return cursorIndex * cellSize - firstCellToCursorLength;
  }
  function updateRibonWidth() {
    const windowWidth = window.innerWidth;
    $$invalidate(1, rubanWidth = Object.keys(offsets).map((offset) => parseInt(offset)).filter((offset) => offset <= windowWidth).reduce((prev, curr) => Math.abs(curr - windowWidth) < Math.abs(prev - windowWidth) ? curr : prev));
    $$invalidate(9, cursorOffset = offsets[rubanWidth]);
  }
  function moveCursor(direction) {
    if (direction === "left")
      $$invalidate(10, cursorPosition--, cursorPosition);
    else
      $$invalidate(10, cursorPosition++, cursorPosition);
    cursorPos.set(cursorPosition);
  }
  function readCell() {
    let cell = values[cursorPosition];
    if (cell === void 0 || cell === null)
      cell = 0;
    return cell;
  }
  function writeCell(value) {
    if (cursorPosition < 0) {
      values.unshift(...Array(Math.abs(cursorPosition)).fill(null));
      $$invalidate(10, cursorPosition = 0);
    }
    if (cursorPosition >= values.length) {
      values.push(...Array(cursorPosition - values.length + 1).fill(null));
    }
    $$invalidate(3, values[cursorPosition] = value, values);
  }
  function changeCell(value) {
    let cell = readCell();
    if (value === "increment")
      cell++;
    else
      cell--;
    writeCell(cell);
  }
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ruban = $$value;
      $$invalidate(0, ruban), $$invalidate(10, cursorPosition), $$invalidate(1, rubanWidth), $$invalidate(9, cursorOffset);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("values" in $$props2)
      $$invalidate(3, values = $$props2.values);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*cursorPosition, paddingElements*/
    1280) {
      {
        if (Math.abs(cursorPosition) >= paddingElements - 8) {
          $$invalidate(8, paddingElements += 10);
        }
      }
    }
    if ($$self.$$.dirty & /*paddingElements, values*/
    264) {
      $$invalidate(2, showedElements = Array(paddingElements).fill(null).concat(values).concat(Array(paddingElements).fill(null)));
    }
    if ($$self.$$.dirty & /*showedElements*/
    4) {
      firstElementRelativeIndex = showedElements.findIndex((element2) => element2 !== null);
    }
    if ($$self.$$.dirty & /*cursorPosition, rubanWidth, cursorOffset, ruban*/
    1539) {
      {
        if (ruban) {
          const initialScrollPosition = ruban.scrollLeft;
          const newScrollPosition = getCursorPosition();
          ruban.scrollTo({
            left: newScrollPosition,
            behavior: "smooth"
          });
          setTimeout(
            () => {
              if (ruban) {
                if (ruban.scrollLeft === initialScrollPosition) {
                  $$invalidate(0, ruban.scrollLeft = newScrollPosition, ruban);
                }
              }
            },
            100
          );
        }
      }
    }
  };
  return [
    ruban,
    rubanWidth,
    showedElements,
    values,
    moveCursor,
    readCell,
    writeCell,
    changeCell,
    paddingElements,
    cursorOffset,
    cursorPosition,
    div0_binding
  ];
}
class Ruban extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {
      values: 3,
      moveCursor: 4,
      readCell: 5,
      writeCell: 6,
      changeCell: 7
    });
  }
  get moveCursor() {
    return this.$$.ctx[4];
  }
  get readCell() {
    return this.$$.ctx[5];
  }
  get writeCell() {
    return this.$$.ctx[6];
  }
  get changeCell() {
    return this.$$.ctx[7];
  }
}
function create_if_block_1$1(ctx) {
  let label;
  let t;
  let input;
  let mounted;
  let dispose;
  return {
    c() {
      label = element("label");
      t = text("Nombre : ");
      input = element("input");
      this.h();
    },
    l(nodes) {
      label = claim_element(nodes, "LABEL", { for: true, class: true });
      var label_nodes = children(label);
      t = claim_text(label_nodes, "Nombre : ");
      input = claim_element(label_nodes, "INPUT", { type: true, class: true });
      label_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input, "type", "number");
      attr(input, "class", "px-1 w-1/2 border border-gray-600");
      attr(label, "for", "number");
      attr(label, "class", "mt-2");
    },
    m(target, anchor) {
      insert_hydration(target, label, anchor);
      append_hydration(label, t);
      append_hydration(label, input);
      set_input_value(
        input,
        /*tableNbr*/
        ctx[3]
      );
      if (!mounted) {
        dispose = listen(
          input,
          "input",
          /*input_input_handler*/
          ctx[6]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*tableNbr*/
      8 && to_number(input.value) !== /*tableNbr*/
      ctx2[3]) {
        set_input_value(
          input,
          /*tableNbr*/
          ctx2[3]
        );
      }
    },
    d(detaching) {
      if (detaching) {
        detach(label);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$1(ctx) {
  let div;
  let input0;
  let t0;
  let p;
  let textContent = "+";
  let t2;
  let input1;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      input0 = element("input");
      t0 = space();
      p = element("p");
      p.textContent = textContent;
      t2 = space();
      input1 = element("input");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      input0 = claim_element(div_nodes, "INPUT", { type: true, class: true });
      t0 = claim_space(div_nodes);
      p = claim_element(div_nodes, "P", { ["data-svelte-h"]: true });
      if (get_svelte_dataset(p) !== "svelte-1cftrcx")
        p.textContent = textContent;
      t2 = claim_space(div_nodes);
      input1 = claim_element(div_nodes, "INPUT", { type: true, class: true });
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(input0, "type", "number");
      attr(input0, "class", "px-1 w-12 border border-gray-600");
      attr(input1, "type", "number");
      attr(input1, "class", "px-1 w-12 border border-gray-600");
      attr(div, "class", "flex gap-x-2");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, input0);
      set_input_value(
        input0,
        /*addition1*/
        ctx[4]
      );
      append_hydration(div, t0);
      append_hydration(div, p);
      append_hydration(div, t2);
      append_hydration(div, input1);
      set_input_value(
        input1,
        /*addition2*/
        ctx[5]
      );
      if (!mounted) {
        dispose = [
          listen(
            input0,
            "input",
            /*input0_input_handler*/
            ctx[7]
          ),
          listen(
            input1,
            "input",
            /*input1_input_handler*/
            ctx[8]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*addition1*/
      16 && to_number(input0.value) !== /*addition1*/
      ctx2[4]) {
        set_input_value(
          input0,
          /*addition1*/
          ctx2[4]
        );
      }
      if (dirty & /*addition2*/
      32 && to_number(input1.value) !== /*addition2*/
      ctx2[5]) {
        set_input_value(
          input1,
          /*addition2*/
          ctx2[5]
        );
      }
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function create_fragment$1(ctx) {
  let div;
  let h1;
  let t0;
  let t1;
  let show_if_1 = (
    /*title*/
    ctx[1].includes("Table")
  );
  let t2;
  let show_if = (
    /*title*/
    ctx[1].includes("une addition de")
  );
  let t3;
  let pre;
  let t4;
  let t5;
  let button;
  let textContent = "Recopier";
  let div_class_value;
  let mounted;
  let dispose;
  let if_block0 = show_if_1 && create_if_block_1$1(ctx);
  let if_block1 = show_if && create_if_block$1(ctx);
  return {
    c() {
      div = element("div");
      h1 = element("h1");
      t0 = text(
        /*title*/
        ctx[1]
      );
      t1 = space();
      if (if_block0)
        if_block0.c();
      t2 = space();
      if (if_block1)
        if_block1.c();
      t3 = space();
      pre = element("pre");
      t4 = text(
        /*code*/
        ctx[0]
      );
      t5 = space();
      button = element("button");
      button.textContent = textContent;
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(
        h1_nodes,
        /*title*/
        ctx[1]
      );
      h1_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      if (if_block0)
        if_block0.l(div_nodes);
      t2 = claim_space(div_nodes);
      if (if_block1)
        if_block1.l(div_nodes);
      t3 = claim_space(div_nodes);
      pre = claim_element(div_nodes, "PRE", { class: true });
      var pre_nodes = children(pre);
      t4 = claim_text(
        pre_nodes,
        /*code*/
        ctx[0]
      );
      pre_nodes.forEach(detach);
      t5 = claim_space(div_nodes);
      button = claim_element(div_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button) !== "svelte-punrn5")
        button.textContent = textContent;
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "text-base font-bold");
      attr(pre, "class", "flex text-wrap overflow-x-hidden mt-3 border border-gray-400 overflow-y-auto");
      attr(button, "class", "text-sm self-end mt-2 px-2 py0.51 border border-green-500 rounded-md text-green-800 hover:bg-green-500 hover:text-white duration-150");
      attr(div, "class", div_class_value = "flex flex-col w-full border-b-2 border-slate-500 py-3 px-2 hover:bg-blue-200 duration-150 " + /*title*/
      (ctx[1].includes("une addition de") ? " max-h-44" : "max-h-36"));
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, h1);
      append_hydration(h1, t0);
      append_hydration(div, t1);
      if (if_block0)
        if_block0.m(div, null);
      append_hydration(div, t2);
      if (if_block1)
        if_block1.m(div, null);
      append_hydration(div, t3);
      append_hydration(div, pre);
      append_hydration(pre, t4);
      append_hydration(div, t5);
      append_hydration(div, button);
      if (!mounted) {
        dispose = listen(
          button,
          "click",
          /*click_handler*/
          ctx[9]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*title*/
      2)
        set_data(
          t0,
          /*title*/
          ctx2[1]
        );
      if (dirty & /*title*/
      2)
        show_if_1 = /*title*/
        ctx2[1].includes("Table");
      if (show_if_1) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
        } else {
          if_block0 = create_if_block_1$1(ctx2);
          if_block0.c();
          if_block0.m(div, t2);
        }
      } else if (if_block0) {
        if_block0.d(1);
        if_block0 = null;
      }
      if (dirty & /*title*/
      2)
        show_if = /*title*/
        ctx2[1].includes("une addition de");
      if (show_if) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block$1(ctx2);
          if_block1.c();
          if_block1.m(div, t3);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
      if (dirty & /*code*/
      1)
        set_data(
          t4,
          /*code*/
          ctx2[0]
        );
      if (dirty & /*title*/
      2 && div_class_value !== (div_class_value = "flex flex-col w-full border-b-2 border-slate-500 py-3 px-2 hover:bg-blue-200 duration-150 " + /*title*/
      (ctx2[1].includes("une addition de") ? " max-h-44" : "max-h-36"))) {
        attr(div, "class", div_class_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
      mounted = false;
      dispose();
    }
  };
}
function repete_character(char, nbre) {
  let str = "";
  for (let i = 0; i < nbre; i++) {
    str += char;
  }
  return str;
}
function instance$1($$self, $$props, $$invalidate) {
  let { title } = $$props;
  let { code } = $$props;
  let { recopierCode } = $$props;
  let tableNbr = 5;
  let addition1 = 33;
  let addition2 = 66;
  function input_input_handler() {
    tableNbr = to_number(this.value);
    $$invalidate(3, tableNbr);
  }
  function input0_input_handler() {
    addition1 = to_number(this.value);
    $$invalidate(4, addition1);
  }
  function input1_input_handler() {
    addition2 = to_number(this.value);
    $$invalidate(5, addition2);
  }
  const click_handler = () => recopierCode(code);
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(1, title = $$props2.title);
    if ("code" in $$props2)
      $$invalidate(0, code = $$props2.code);
    if ("recopierCode" in $$props2)
      $$invalidate(2, recopierCode = $$props2.recopierCode);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*title, code, tableNbr*/
    11) {
      {
        if (title.includes("Table")) {
          $$invalidate(0, code = "");
          for (let i = 0; i < 11; i++) {
            $$invalidate(0, code += repete_character("+", tableNbr) + "[>" + repete_character("+", i) + "<-]>!>");
          }
        }
      }
    }
    if ($$self.$$.dirty & /*title, addition1, addition2*/
    50) {
      {
        if (title.includes("une addition de"))
          $$invalidate(0, code = repete_character("+", addition1) + repete_character("+", addition2) + "!");
      }
    }
  };
  return [
    code,
    title,
    recopierCode,
    tableNbr,
    addition1,
    addition2,
    input_input_handler,
    input0_input_handler,
    input1_input_handler,
    click_handler
  ];
}
class Programme extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { title: 1, code: 0, recopierCode: 2 });
  }
}
function create_if_block_2(ctx) {
  let div0;
  let div0_transition;
  let t0;
  let div2;
  let div1;
  let programme0;
  let t1;
  let programme1;
  let t2;
  let programme2;
  let t3;
  let programme3;
  let t4;
  let programme4;
  let t5;
  let programme5;
  let t6;
  let programme6;
  let t7;
  let programme7;
  let t8;
  let programme8;
  let t9;
  let programme9;
  let div2_transition;
  let current;
  let mounted;
  let dispose;
  programme0 = new Programme({
    props: {
      title: "Mettre 6 à la 2ème position",
      code: "+++[->++<]>!",
      recopierCode: (
        /*recopierCode*/
        ctx[9]
      )
    }
  });
  programme1 = new Programme({
    props: {
      title: "Affichage de '0'",
      code: "+++++[->++++++++++<]>--.",
      recopierCode: (
        /*recopierCode*/
        ctx[9]
      )
    }
  });
  programme2 = new Programme({
    props: {
      title: "Affichage de '02'",
      code: "+++++[->++++++++++<]>--.>+++++[->++++++++++<]>.",
      recopierCode: (
        /*recopierCode*/
        ctx[9]
      )
    }
  });
  programme3 = new Programme({
    props: {
      recopierCode: (
        /*recopierCode*/
        ctx[9]
      ),
      title: "Affichage de 'Hello, World!'",
      code: "++++++[>++++++++++++<-]>.>++++++++++[>++++++++++<-]>+.+++++++..+++.>++++[>+++++++++++<-]>.<+++[>----<-]>.<<<<<+++[>+++++<-]>.>>.+++.------.--------.>>+."
    }
  });
  programme4 = new Programme({
    props: {
      recopierCode: (
        /*recopierCode*/
        ctx[9]
      ),
      title: "Calcul de 4*7",
      code: ">++++[-<+++++++>]<!"
    }
  });
  programme5 = new Programme({
    props: {
      recopierCode: (
        /*recopierCode*/
        ctx[9]
      ),
      title: "Affichage de 'LV'",
      code: "++++[>+++++++++++++++++++<-]>.<++++++[>+++++++<-]>."
    }
  });
  programme6 = new Programme({
    props: {
      recopierCode: (
        /*recopierCode*/
        ctx[9]
      ),
      title: "Calcul de 5x4",
      code: "+++++[>++++<-]>!"
    }
  });
  programme7 = new Programme({
    props: {
      recopierCode: (
        /*recopierCode*/
        ctx[9]
      ),
      title: "Calcul d'une addition de deux nombres donnés",
      code: ""
    }
  });
  programme8 = new Programme({
    props: {
      recopierCode: (
        /*recopierCode*/
        ctx[9]
      ),
      title: "Table d'un nombre",
      code: ""
    }
  });
  programme9 = new Programme({
    props: {
      recopierCode: (
        /*recopierCode*/
        ctx[9]
      ),
      title: "Boucle imbriquée : affichage de 1024",
      code: "+>>++++++++++[<<[>++<-]>[<+>-]>-]<<!"
    }
  });
  return {
    c() {
      div0 = element("div");
      t0 = space();
      div2 = element("div");
      div1 = element("div");
      create_component(programme0.$$.fragment);
      t1 = space();
      create_component(programme1.$$.fragment);
      t2 = space();
      create_component(programme2.$$.fragment);
      t3 = space();
      create_component(programme3.$$.fragment);
      t4 = space();
      create_component(programme4.$$.fragment);
      t5 = space();
      create_component(programme5.$$.fragment);
      t6 = space();
      create_component(programme6.$$.fragment);
      t7 = space();
      create_component(programme7.$$.fragment);
      t8 = space();
      create_component(programme8.$$.fragment);
      t9 = space();
      create_component(programme9.$$.fragment);
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", { class: true });
      children(div0).forEach(detach);
      t0 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(programme0.$$.fragment, div1_nodes);
      t1 = claim_space(div1_nodes);
      claim_component(programme1.$$.fragment, div1_nodes);
      t2 = claim_space(div1_nodes);
      claim_component(programme2.$$.fragment, div1_nodes);
      t3 = claim_space(div1_nodes);
      claim_component(programme3.$$.fragment, div1_nodes);
      t4 = claim_space(div1_nodes);
      claim_component(programme4.$$.fragment, div1_nodes);
      t5 = claim_space(div1_nodes);
      claim_component(programme5.$$.fragment, div1_nodes);
      t6 = claim_space(div1_nodes);
      claim_component(programme6.$$.fragment, div1_nodes);
      t7 = claim_space(div1_nodes);
      claim_component(programme7.$$.fragment, div1_nodes);
      t8 = claim_space(div1_nodes);
      claim_component(programme8.$$.fragment, div1_nodes);
      t9 = claim_space(div1_nodes);
      claim_component(programme9.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-30");
      attr(div1, "class", "flex flex-col overflow-y-scroll h-full");
      attr(div2, "class", "fixed top-0 left-0 w-64 h-screen bg-white shadow-2xl z-40 pt-12");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      mount_component(programme0, div1, null);
      append_hydration(div1, t1);
      mount_component(programme1, div1, null);
      append_hydration(div1, t2);
      mount_component(programme2, div1, null);
      append_hydration(div1, t3);
      mount_component(programme3, div1, null);
      append_hydration(div1, t4);
      mount_component(programme4, div1, null);
      append_hydration(div1, t5);
      mount_component(programme5, div1, null);
      append_hydration(div1, t6);
      mount_component(programme6, div1, null);
      append_hydration(div1, t7);
      mount_component(programme7, div1, null);
      append_hydration(div1, t8);
      mount_component(programme8, div1, null);
      append_hydration(div1, t9);
      mount_component(programme9, div1, null);
      current = true;
      if (!mounted) {
        dispose = listen(
          div0,
          "click",
          /*click_handler*/
          ctx[11]
        );
        mounted = true;
      }
    },
    p: noop,
    i(local) {
      if (current)
        return;
      if (local) {
        add_render_callback(() => {
          if (!current)
            return;
          if (!div0_transition)
            div0_transition = create_bidirectional_transition(div0, fade, {}, true);
          div0_transition.run(1);
        });
      }
      transition_in(programme0.$$.fragment, local);
      transition_in(programme1.$$.fragment, local);
      transition_in(programme2.$$.fragment, local);
      transition_in(programme3.$$.fragment, local);
      transition_in(programme4.$$.fragment, local);
      transition_in(programme5.$$.fragment, local);
      transition_in(programme6.$$.fragment, local);
      transition_in(programme7.$$.fragment, local);
      transition_in(programme8.$$.fragment, local);
      transition_in(programme9.$$.fragment, local);
      if (local) {
        add_render_callback(() => {
          if (!current)
            return;
          if (!div2_transition)
            div2_transition = create_bidirectional_transition(div2, slide, { axis: "x" }, true);
          div2_transition.run(1);
        });
      }
      current = true;
    },
    o(local) {
      if (local) {
        if (!div0_transition)
          div0_transition = create_bidirectional_transition(div0, fade, {}, false);
        div0_transition.run(0);
      }
      transition_out(programme0.$$.fragment, local);
      transition_out(programme1.$$.fragment, local);
      transition_out(programme2.$$.fragment, local);
      transition_out(programme3.$$.fragment, local);
      transition_out(programme4.$$.fragment, local);
      transition_out(programme5.$$.fragment, local);
      transition_out(programme6.$$.fragment, local);
      transition_out(programme7.$$.fragment, local);
      transition_out(programme8.$$.fragment, local);
      transition_out(programme9.$$.fragment, local);
      if (local) {
        if (!div2_transition)
          div2_transition = create_bidirectional_transition(div2, slide, { axis: "x" }, false);
        div2_transition.run(0);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div0);
        detach(t0);
        detach(div2);
      }
      if (detaching && div0_transition)
        div0_transition.end();
      destroy_component(programme0);
      destroy_component(programme1);
      destroy_component(programme2);
      destroy_component(programme3);
      destroy_component(programme4);
      destroy_component(programme5);
      destroy_component(programme6);
      destroy_component(programme7);
      destroy_component(programme8);
      destroy_component(programme9);
      if (detaching && div2_transition)
        div2_transition.end();
      mounted = false;
      dispose();
    }
  };
}
function create_else_block(ctx) {
  let textarea;
  let mounted;
  let dispose;
  return {
    c() {
      textarea = element("textarea");
      this.h();
    },
    l(nodes) {
      textarea = claim_element(nodes, "TEXTAREA", { class: true });
      children(textarea).forEach(detach);
      this.h();
    },
    h() {
      attr(textarea, "class", "code mt-10 h-64 px-2 py-1 border-4 border-violet-400 shadow-2xl outline-none text-2xl shadow-violet-600 rounded-xl mx-10");
    },
    m(target, anchor) {
      insert_hydration(target, textarea, anchor);
      set_input_value(
        textarea,
        /*programme*/
        ctx[0]
      );
      if (!mounted) {
        dispose = listen(
          textarea,
          "input",
          /*textarea_input_handler*/
          ctx[15]
        );
        mounted = true;
      }
    },
    p(ctx2, dirty) {
      if (dirty & /*programme*/
      1) {
        set_input_value(
          textarea,
          /*programme*/
          ctx2[0]
        );
      }
    },
    d(detaching) {
      if (detaching) {
        detach(textarea);
      }
      mounted = false;
      dispose();
    }
  };
}
function create_if_block_1(ctx) {
  let p;
  let html_tag;
  return {
    c() {
      p = element("p");
      html_tag = new HtmlTagHydration(false);
      this.h();
    },
    l(nodes) {
      p = claim_element(nodes, "P", { class: true });
      var p_nodes = children(p);
      html_tag = claim_html_tag(p_nodes, false);
      p_nodes.forEach(detach);
      this.h();
    },
    h() {
      html_tag.a = null;
      attr(p, "class", "code mt-10 h-64 overflow-y-scroll px-2 py-1 border-4 bg-white border-violet-400 shadow-2xl outline-none text-2xl shadow-violet-600 rounded-xl mx-10");
    },
    m(target, anchor) {
      insert_hydration(target, p, anchor);
      html_tag.m(
        /*programmeHtml*/
        ctx[1],
        p
      );
    },
    p(ctx2, dirty) {
      if (dirty & /*programmeHtml*/
      2)
        html_tag.p(
          /*programmeHtml*/
          ctx2[1]
        );
    },
    d(detaching) {
      if (detaching) {
        detach(p);
      }
    }
  };
}
function create_if_block(ctx) {
  let div2;
  let div1;
  let textContent = `<h1 class="text-xl font-bold mb-auto">Mais dit moi Jammy, comment cela fonctionne-t-il ?</h1> <p class="mt-4 text-base mb-auto">Le package permettant d&#39;interagir avec l&#39;interpréteur codé en Python et cette fenêtre web
					(Svelte X TypeScript) est <span class="font-bold">pywebview</span>. Ainsi, j&#39;ai pu
					exprimer mes talents de développeur web pour créer une interface graphique pour mon
					interpréteur.
					<br/> <br/>
					Vous pouvez notamment consulter les classes <span class="font-bold">Api</span> et
					<span class="font-bold">Interpreteur</span>
					dans le code Python pour mieux comprendre le fonctionnement. Vous pouvez également consulter
					le code de cette page sous
					<span class="font-bold">web/src/routes/+page.svelte</span>.

					<br/> <br/></p> <div class="flex flex-row mb-5 gap-x-2 items-center justify-center"><span>Temps passé à ne pas réviser les maths :</span> <img src="https://wakatime.com/badge/user/b8ecff52-7743-4a1e-8b28-93fcce7c9b7d/project/018d092f-0a3b-4034-bbed-a72be46061d6.svg" alt="wakatime"/></div>`;
  let div1_transition;
  let div2_transition;
  let current;
  let mounted;
  let dispose;
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      div1.innerHTML = textContent;
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(div1) !== "svelte-1r4z4s1")
        div1.innerHTML = textContent;
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div1, "class", "fixed flex flex-col items-center justify-center w-4/6 h-5/6 bg-white shadow-2xl text-center px-8 z-40 pt-12 rounded-2xl border-4 border-purple-500");
      attr(div2, "class", "fixed flex items-center justify-center top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-30");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      current = true;
      if (!mounted) {
        dispose = listen(
          div2,
          "click",
          /*click_handler_3*/
          ctx[19]
        );
        mounted = true;
      }
    },
    p: noop,
    i(local) {
      if (current)
        return;
      if (local) {
        add_render_callback(() => {
          if (!current)
            return;
          if (!div1_transition)
            div1_transition = create_bidirectional_transition(div1, slide, { axis: "x" }, true);
          div1_transition.run(1);
        });
      }
      if (local) {
        add_render_callback(() => {
          if (!current)
            return;
          if (!div2_transition)
            div2_transition = create_bidirectional_transition(div2, fade, {}, true);
          div2_transition.run(1);
        });
      }
      current = true;
    },
    o(local) {
      if (local) {
        if (!div1_transition)
          div1_transition = create_bidirectional_transition(div1, slide, { axis: "x" }, false);
        div1_transition.run(0);
      }
      if (local) {
        if (!div2_transition)
          div2_transition = create_bidirectional_transition(div2, fade, {}, false);
        div2_transition.run(0);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div2);
      }
      if (detaching && div1_transition)
        div1_transition.end();
      if (detaching && div2_transition)
        div2_transition.end();
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let t0;
  let button0;
  let textContent = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>`;
  let t1;
  let div2;
  let ruban_1;
  let updating_values;
  let t2;
  let t3;
  let button1;
  let t4_value = (
    /*isExecuting*/
    ctx[4] ? "Arrêter" : "Exécuter"
  );
  let t4;
  let button1_class_value;
  let t5;
  let div1;
  let p0;
  let textContent_1 = "Vitesse";
  let t7;
  let div0;
  let input;
  let t8;
  let p1;
  let t9;
  let t10;
  let t11;
  let button2;
  let textContent_2 = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="purple"><path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path></svg>`;
  let t12;
  let current;
  let mounted;
  let dispose;
  let if_block0 = (
    /*openMenu*/
    ctx[5] && create_if_block_2(ctx)
  );
  function ruban_1_values_binding(value) {
    ctx[14](value);
  }
  let ruban_1_props = {};
  if (
    /*values*/
    ctx[7] !== void 0
  ) {
    ruban_1_props.values = /*values*/
    ctx[7];
  }
  ruban_1 = new Ruban({ props: ruban_1_props });
  ctx[13](ruban_1);
  binding_callbacks.push(() => bind(ruban_1, "values", ruban_1_values_binding));
  function select_block_type(ctx2, dirty) {
    if (
      /*isExecuting*/
      ctx2[4]
    )
      return create_if_block_1;
    return create_else_block;
  }
  let current_block_type = select_block_type(ctx);
  let if_block1 = current_block_type(ctx);
  let if_block2 = (
    /*showInfo*/
    ctx[6] && create_if_block(ctx)
  );
  return {
    c() {
      if (if_block0)
        if_block0.c();
      t0 = space();
      button0 = element("button");
      button0.innerHTML = textContent;
      t1 = space();
      div2 = element("div");
      create_component(ruban_1.$$.fragment);
      t2 = space();
      if_block1.c();
      t3 = space();
      button1 = element("button");
      t4 = text(t4_value);
      t5 = space();
      div1 = element("div");
      p0 = element("p");
      p0.textContent = textContent_1;
      t7 = space();
      div0 = element("div");
      input = element("input");
      t8 = space();
      p1 = element("p");
      t9 = text(
        /*speed*/
        ctx[3]
      );
      t10 = text(" sec");
      t11 = space();
      button2 = element("button");
      button2.innerHTML = textContent_2;
      t12 = space();
      if (if_block2)
        if_block2.c();
      this.h();
    },
    l(nodes) {
      if (if_block0)
        if_block0.l(nodes);
      t0 = claim_space(nodes);
      button0 = claim_element(nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button0) !== "svelte-1a1v97k")
        button0.innerHTML = textContent;
      t1 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(ruban_1.$$.fragment, div2_nodes);
      t2 = claim_space(div2_nodes);
      if_block1.l(div2_nodes);
      t3 = claim_space(div2_nodes);
      button1 = claim_element(div2_nodes, "BUTTON", { class: true });
      var button1_nodes = children(button1);
      t4 = claim_text(button1_nodes, t4_value);
      button1_nodes.forEach(detach);
      t5 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      p0 = claim_element(div1_nodes, "P", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(p0) !== "svelte-1jqq79t")
        p0.textContent = textContent_1;
      t7 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      input = claim_element(div0_nodes, "INPUT", {
        class: true,
        type: true,
        min: true,
        max: true,
        step: true
      });
      t8 = claim_space(div0_nodes);
      p1 = claim_element(div0_nodes, "P", { class: true });
      var p1_nodes = children(p1);
      t9 = claim_text(
        p1_nodes,
        /*speed*/
        ctx[3]
      );
      t10 = claim_text(p1_nodes, " sec");
      p1_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      t11 = claim_space(div2_nodes);
      button2 = claim_element(div2_nodes, "BUTTON", { class: true, ["data-svelte-h"]: true });
      if (get_svelte_dataset(button2) !== "svelte-5ttpfr")
        button2.innerHTML = textContent_2;
      t12 = claim_space(div2_nodes);
      if (if_block2)
        if_block2.l(div2_nodes);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button0, "class", "absolute top-0 left-0 mt-2 ml-2 z-50");
      attr(button1, "class", button1_class_value = "mt-10 w-32 self-center  duration-150 border-2 hover:scale-105  text-white px-4 py-2 rounded-md" + /*isExecuting*/
      (ctx[4] ? " bg-red-500 hover:bg-red-700 border-red-700 shadow-red-700 " : " bg-violet-700 hover:bg-violet-600 border-violet-700 shadow-violet-700"));
      attr(p0, "class", "text-xl font-bold");
      attr(input, "class", "ml-2");
      attr(input, "type", "range");
      attr(input, "min", "0");
      attr(input, "max", "1.5");
      attr(input, "step", "0.01");
      attr(p1, "class", "ml-2 text-sm");
      attr(div0, "class", "flex flex-row");
      attr(div1, "class", "flex justify-center flex-col items-center mt-10");
      attr(button2, "class", "w-12 h-12 absolute bottom-2 right-2");
      attr(div2, "class", "flex relative flex-col w-screen h-screen bg-violet-300 pt-20 pb-8");
    },
    m(target, anchor) {
      if (if_block0)
        if_block0.m(target, anchor);
      insert_hydration(target, t0, anchor);
      insert_hydration(target, button0, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div2, anchor);
      mount_component(ruban_1, div2, null);
      append_hydration(div2, t2);
      if_block1.m(div2, null);
      append_hydration(div2, t3);
      append_hydration(div2, button1);
      append_hydration(button1, t4);
      append_hydration(div2, t5);
      append_hydration(div2, div1);
      append_hydration(div1, p0);
      append_hydration(div1, t7);
      append_hydration(div1, div0);
      append_hydration(div0, input);
      set_input_value(
        input,
        /*speed*/
        ctx[3]
      );
      append_hydration(div0, t8);
      append_hydration(div0, p1);
      append_hydration(p1, t9);
      append_hydration(p1, t10);
      append_hydration(div2, t11);
      append_hydration(div2, button2);
      append_hydration(div2, t12);
      if (if_block2)
        if_block2.m(div2, null);
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            button0,
            "click",
            /*click_handler_1*/
            ctx[12]
          ),
          listen(
            button1,
            "click",
            /*executeCode*/
            ctx[8]
          ),
          listen(
            input,
            "change",
            /*input_change_input_handler*/
            ctx[16]
          ),
          listen(
            input,
            "input",
            /*input_change_input_handler*/
            ctx[16]
          ),
          listen(
            input,
            "input",
            /*input_handler*/
            ctx[17]
          ),
          listen(
            button2,
            "click",
            /*click_handler_2*/
            ctx[18]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (
        /*openMenu*/
        ctx2[5]
      ) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & /*openMenu*/
          32) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(t0.parentNode, t0);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      const ruban_1_changes = {};
      if (!updating_values && dirty & /*values*/
      128) {
        updating_values = true;
        ruban_1_changes.values = /*values*/
        ctx2[7];
        add_flush_callback(() => updating_values = false);
      }
      ruban_1.$set(ruban_1_changes);
      if (current_block_type === (current_block_type = select_block_type(ctx2)) && if_block1) {
        if_block1.p(ctx2, dirty);
      } else {
        if_block1.d(1);
        if_block1 = current_block_type(ctx2);
        if (if_block1) {
          if_block1.c();
          if_block1.m(div2, t3);
        }
      }
      if ((!current || dirty & /*isExecuting*/
      16) && t4_value !== (t4_value = /*isExecuting*/
      ctx2[4] ? "Arrêter" : "Exécuter"))
        set_data(t4, t4_value);
      if (!current || dirty & /*isExecuting*/
      16 && button1_class_value !== (button1_class_value = "mt-10 w-32 self-center  duration-150 border-2 hover:scale-105  text-white px-4 py-2 rounded-md" + /*isExecuting*/
      (ctx2[4] ? " bg-red-500 hover:bg-red-700 border-red-700 shadow-red-700 " : " bg-violet-700 hover:bg-violet-600 border-violet-700 shadow-violet-700"))) {
        attr(button1, "class", button1_class_value);
      }
      if (dirty & /*speed*/
      8) {
        set_input_value(
          input,
          /*speed*/
          ctx2[3]
        );
      }
      if (!current || dirty & /*speed*/
      8)
        set_data(
          t9,
          /*speed*/
          ctx2[3]
        );
      if (
        /*showInfo*/
        ctx2[6]
      ) {
        if (if_block2) {
          if_block2.p(ctx2, dirty);
          if (dirty & /*showInfo*/
          64) {
            transition_in(if_block2, 1);
          }
        } else {
          if_block2 = create_if_block(ctx2);
          if_block2.c();
          transition_in(if_block2, 1);
          if_block2.m(div2, null);
        }
      } else if (if_block2) {
        group_outros();
        transition_out(if_block2, 1, 1, () => {
          if_block2 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(ruban_1.$$.fragment, local);
      transition_in(if_block2);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(ruban_1.$$.fragment, local);
      transition_out(if_block2);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t0);
        detach(button0);
        detach(t1);
        detach(div2);
      }
      if (if_block0)
        if_block0.d(detaching);
      ctx[13](null);
      destroy_component(ruban_1);
      if_block1.d();
      if (if_block2)
        if_block2.d();
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let ruban;
  let speed = 0.5;
  let isExecuting = false;
  let programme = "+>>++++++++++[<<[>++<-]>[<+>-]>-]<<!";
  let openMenu = false;
  let showInfo = false;
  let programmeHtml = programme;
  let instructionIndex = 0;
  let values = [];
  async function executeCode() {
    if (isExecuting) {
      $$invalidate(4, isExecuting = false);
      await Api.api.stopExecution();
      return;
    } else {
      cursorPos.set(0);
      $$invalidate(7, values = []);
      $$invalidate(10, instructionIndex = 0);
      $$invalidate(4, isExecuting = true);
      await Api.api.interpretCode(programme, speed);
      $$invalidate(4, isExecuting = false);
    }
  }
  onMount(() => {
    window.move = (direction) => {
      ruban.moveCursor(direction);
    };
    window.change = (value) => {
      ruban.changeCell(value);
    };
    window.printBytes = (byte) => {
      toast.success(`[!] - Valeur de la cellule : ${byte}`);
    };
    window.printChar = (text2) => {
      toast.success("[.] - Valeur de la cellule (convertie en ASCII) : " + text2);
    };
    window.userInput = () => {
      const value = prompt("[,] - Valeur à écrire (elle sera convertie en son équivalent décimal) : ");
      if (value === null)
        return;
      const byte = value.charCodeAt(0);
      ruban.writeCell(byte);
      return byte;
    };
    window.changeInstructionIndex = (index) => {
      $$invalidate(10, instructionIndex = index);
    };
  });
  function recopierCode(code) {
    $$invalidate(5, openMenu = false);
    $$invalidate(0, programme = code);
  }
  const click_handler = () => $$invalidate(5, openMenu = false);
  const click_handler_1 = () => $$invalidate(5, openMenu = !openMenu);
  function ruban_1_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      ruban = $$value;
      $$invalidate(2, ruban);
    });
  }
  function ruban_1_values_binding(value) {
    values = value;
    $$invalidate(7, values);
  }
  function textarea_input_handler() {
    programme = this.value;
    $$invalidate(0, programme);
  }
  function input_change_input_handler() {
    speed = to_number(this.value);
    $$invalidate(3, speed);
  }
  const input_handler = () => {
    Api.api.changeSpeed(speed);
  };
  const click_handler_2 = () => $$invalidate(6, showInfo = true);
  const click_handler_3 = () => $$invalidate(6, showInfo = false);
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*programme, instructionIndex, programmeHtml*/
    1027) {
      {
        let instructions = programme.split("");
        if (instructions[instructionIndex] !== "[" && instructions[instructionIndex] !== "]") {
          instructions[instructionIndex] = `{span class="text-red-500 font-bold"}${instructions[instructionIndex]}{/span}`;
          $$invalidate(1, programmeHtml = instructions.join(""));
          $$invalidate(1, programmeHtml = programmeHtml.replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("{", "<").replaceAll("}", ">"));
        }
      }
    }
  };
  return [
    programme,
    programmeHtml,
    ruban,
    speed,
    isExecuting,
    openMenu,
    showInfo,
    values,
    executeCode,
    recopierCode,
    instructionIndex,
    click_handler,
    click_handler_1,
    ruban_1_binding,
    ruban_1_values_binding,
    textarea_input_handler,
    input_change_input_handler,
    input_handler,
    click_handler_2,
    click_handler_3
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as component
};

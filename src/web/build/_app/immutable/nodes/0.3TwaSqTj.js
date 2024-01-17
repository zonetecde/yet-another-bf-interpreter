import { w as onDestroy, s as safe_not_equal, n as noop, x as assign, y as create_slot, z as update_slot_base, A as get_all_dirty_from_scope, B as get_slot_changes, o as onMount, d as binding_callbacks, r as run_all, c as component_subscribe } from "../chunks/scheduler.IZExxfgS.js";
import { S as SvelteComponent, i as init, e as element, c as claim_element, a as children, d as detach, o as attr, p as set_style, g as insert_hydration, k as empty, q as group_outros, l as transition_out, m as check_outros, n as transition_in, u as create_component, s as space, v as claim_component, f as claim_space, w as mount_component, h as append_hydration, x as destroy_component, r as construct_svelte_component, t as text, b as claim_text, j as set_data, J as set_attributes, K as toggle_class, C as listen } from "../chunks/index.zqg2Rxpq.js";
import { u as useToasterStore, t as toast, s as startPause, a as endPause, b as update, p as prefersReducedMotion, e as ensure_array_like, c as update_keyed_each, o as outro_and_destroy_block } from "../chunks/Toaster.svelte_svelte_type_style_lang.Aum9VTgW.js";
function get_spread_update(levels, updates) {
  const update2 = {};
  const to_null_out = {};
  const accounted_for = { $$scope: 1 };
  let i = levels.length;
  while (i--) {
    const o = levels[i];
    const n = updates[i];
    if (n) {
      for (const key in o) {
        if (!(key in n))
          to_null_out[key] = 1;
      }
      for (const key in n) {
        if (!accounted_for[key]) {
          update2[key] = n[key];
          accounted_for[key] = 1;
        }
      }
      levels[i] = n;
    } else {
      for (const key in o) {
        accounted_for[key] = 1;
      }
    }
  }
  for (const key in to_null_out) {
    if (!(key in update2))
      update2[key] = void 0;
  }
  return update2;
}
function get_spread_object(spread_props) {
  return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
}
const ssr = false;
const prerender = true;
const _layout = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  prerender,
  ssr
}, Symbol.toStringTag, { value: "Module" }));
function calculateOffset(toast2, $toasts, opts) {
  const { reverseOrder, gutter = 8, defaultPosition } = opts || {};
  const relevantToasts = $toasts.filter((t) => (t.position || defaultPosition) === (toast2.position || defaultPosition) && t.height);
  const toastIndex = relevantToasts.findIndex((t) => t.id === toast2.id);
  const toastsBefore = relevantToasts.filter((toast3, i) => i < toastIndex && toast3.visible).length;
  const offset = relevantToasts.filter((t) => t.visible).slice(...reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce((acc, t) => acc + (t.height || 0) + gutter, 0);
  return offset;
}
const handlers = {
  startPause() {
    startPause(Date.now());
  },
  endPause() {
    endPause(Date.now());
  },
  updateHeight: (toastId, height) => {
    update({ id: toastId, height });
  },
  calculateOffset
};
function useToaster(toastOptions) {
  const { toasts, pausedAt } = useToasterStore(toastOptions);
  const timeouts = /* @__PURE__ */ new Map();
  let _pausedAt;
  const unsubscribes = [
    pausedAt.subscribe(($pausedAt) => {
      if ($pausedAt) {
        for (const [, timeoutId] of timeouts) {
          clearTimeout(timeoutId);
        }
        timeouts.clear();
      }
      _pausedAt = $pausedAt;
    }),
    toasts.subscribe(($toasts) => {
      if (_pausedAt) {
        return;
      }
      const now = Date.now();
      for (const t of $toasts) {
        if (timeouts.has(t.id)) {
          continue;
        }
        if (t.duration === Infinity) {
          continue;
        }
        const durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);
        if (durationLeft < 0) {
          if (t.visible) {
            toast.dismiss(t.id);
          }
          return null;
        }
        timeouts.set(t.id, setTimeout(() => toast.dismiss(t.id), durationLeft));
      }
    })
  ];
  onDestroy(() => {
    for (const unsubscribe of unsubscribes) {
      unsubscribe();
    }
  });
  return { toasts, handlers };
}
function create_fragment$8(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "svelte-11kvm4p");
      set_style(
        div,
        "--primary",
        /*primary*/
        ctx[0]
      );
      set_style(
        div,
        "--secondary",
        /*secondary*/
        ctx[1]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*primary*/
      1) {
        set_style(
          div,
          "--primary",
          /*primary*/
          ctx2[0]
        );
      }
      if (dirty & /*secondary*/
      2) {
        set_style(
          div,
          "--secondary",
          /*secondary*/
          ctx2[1]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function instance$8($$self, $$props, $$invalidate) {
  let { primary = "#61d345" } = $$props;
  let { secondary = "#fff" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("primary" in $$props2)
      $$invalidate(0, primary = $$props2.primary);
    if ("secondary" in $$props2)
      $$invalidate(1, secondary = $$props2.secondary);
  };
  return [primary, secondary];
}
class CheckmarkIcon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$8, create_fragment$8, safe_not_equal, { primary: 0, secondary: 1 });
  }
}
function create_fragment$7(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "svelte-1ee93ns");
      set_style(
        div,
        "--primary",
        /*primary*/
        ctx[0]
      );
      set_style(
        div,
        "--secondary",
        /*secondary*/
        ctx[1]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*primary*/
      1) {
        set_style(
          div,
          "--primary",
          /*primary*/
          ctx2[0]
        );
      }
      if (dirty & /*secondary*/
      2) {
        set_style(
          div,
          "--secondary",
          /*secondary*/
          ctx2[1]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  let { primary = "#ff4b4b" } = $$props;
  let { secondary = "#fff" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("primary" in $$props2)
      $$invalidate(0, primary = $$props2.primary);
    if ("secondary" in $$props2)
      $$invalidate(1, secondary = $$props2.secondary);
  };
  return [primary, secondary];
}
class ErrorIcon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, { primary: 0, secondary: 1 });
  }
}
function create_fragment$6(ctx) {
  let div;
  return {
    c() {
      div = element("div");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      children(div).forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "svelte-1j7dflg");
      set_style(
        div,
        "--primary",
        /*primary*/
        ctx[0]
      );
      set_style(
        div,
        "--secondary",
        /*secondary*/
        ctx[1]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*primary*/
      1) {
        set_style(
          div,
          "--primary",
          /*primary*/
          ctx2[0]
        );
      }
      if (dirty & /*secondary*/
      2) {
        set_style(
          div,
          "--secondary",
          /*secondary*/
          ctx2[1]
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let { primary = "#616161" } = $$props;
  let { secondary = "#e0e0e0" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("primary" in $$props2)
      $$invalidate(0, primary = $$props2.primary);
    if ("secondary" in $$props2)
      $$invalidate(1, secondary = $$props2.secondary);
  };
  return [primary, secondary];
}
class LoaderIcon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { primary: 0, secondary: 1 });
  }
}
function create_if_block_2(ctx) {
  let div;
  let loadericon;
  let t;
  let current;
  const loadericon_spread_levels = [
    /*iconTheme*/
    ctx[0]
  ];
  let loadericon_props = {};
  for (let i = 0; i < loadericon_spread_levels.length; i += 1) {
    loadericon_props = assign(loadericon_props, loadericon_spread_levels[i]);
  }
  loadericon = new LoaderIcon({ props: loadericon_props });
  let if_block = (
    /*type*/
    ctx[2] !== "loading" && create_if_block_3(ctx)
  );
  return {
    c() {
      div = element("div");
      create_component(loadericon.$$.fragment);
      t = space();
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      claim_component(loadericon.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "indicator svelte-1kgeier");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      mount_component(loadericon, div, null);
      append_hydration(div, t);
      if (if_block)
        if_block.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      const loadericon_changes = dirty & /*iconTheme*/
      1 ? get_spread_update(loadericon_spread_levels, [get_spread_object(
        /*iconTheme*/
        ctx2[0]
      )]) : {};
      loadericon.$set(loadericon_changes);
      if (
        /*type*/
        ctx2[2] !== "loading"
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & /*type*/
          4) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block_3(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(loadericon.$$.fragment, local);
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(loadericon.$$.fragment, local);
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      destroy_component(loadericon);
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block_1(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*icon*/
    ctx[1]
  );
  function switch_props(ctx2, dirty) {
    return {};
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props());
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*icon*/
      2 && switch_value !== (switch_value = /*icon*/
      ctx2[1])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props());
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block$3(ctx) {
  let div;
  let t;
  return {
    c() {
      div = element("div");
      t = text(
        /*icon*/
        ctx[1]
      );
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      t = claim_text(
        div_nodes,
        /*icon*/
        ctx[1]
      );
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "animated svelte-1kgeier");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
    },
    p(ctx2, dirty) {
      if (dirty & /*icon*/
      2)
        set_data(
          t,
          /*icon*/
          ctx2[1]
        );
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(div);
      }
    }
  };
}
function create_if_block_3(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block_4, create_else_block$3];
  const if_blocks = [];
  function select_block_type_1(ctx2, dirty) {
    if (
      /*type*/
      ctx2[2] === "error"
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type_1(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "status svelte-1kgeier");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type_1(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, null);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if_blocks[current_block_type_index].d();
    }
  };
}
function create_else_block$3(ctx) {
  let checkmarkicon;
  let current;
  const checkmarkicon_spread_levels = [
    /*iconTheme*/
    ctx[0]
  ];
  let checkmarkicon_props = {};
  for (let i = 0; i < checkmarkicon_spread_levels.length; i += 1) {
    checkmarkicon_props = assign(checkmarkicon_props, checkmarkicon_spread_levels[i]);
  }
  checkmarkicon = new CheckmarkIcon({ props: checkmarkicon_props });
  return {
    c() {
      create_component(checkmarkicon.$$.fragment);
    },
    l(nodes) {
      claim_component(checkmarkicon.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(checkmarkicon, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const checkmarkicon_changes = dirty & /*iconTheme*/
      1 ? get_spread_update(checkmarkicon_spread_levels, [get_spread_object(
        /*iconTheme*/
        ctx2[0]
      )]) : {};
      checkmarkicon.$set(checkmarkicon_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(checkmarkicon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(checkmarkicon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(checkmarkicon, detaching);
    }
  };
}
function create_if_block_4(ctx) {
  let erroricon;
  let current;
  const erroricon_spread_levels = [
    /*iconTheme*/
    ctx[0]
  ];
  let erroricon_props = {};
  for (let i = 0; i < erroricon_spread_levels.length; i += 1) {
    erroricon_props = assign(erroricon_props, erroricon_spread_levels[i]);
  }
  erroricon = new ErrorIcon({ props: erroricon_props });
  return {
    c() {
      create_component(erroricon.$$.fragment);
    },
    l(nodes) {
      claim_component(erroricon.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(erroricon, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const erroricon_changes = dirty & /*iconTheme*/
      1 ? get_spread_update(erroricon_spread_levels, [get_spread_object(
        /*iconTheme*/
        ctx2[0]
      )]) : {};
      erroricon.$set(erroricon_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(erroricon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(erroricon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(erroricon, detaching);
    }
  };
}
function create_fragment$5(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block$3, create_if_block_1, create_if_block_2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (typeof /*icon*/
    ctx2[1] === "string")
      return 0;
    if (typeof /*icon*/
    ctx2[1] !== "undefined")
      return 1;
    if (
      /*type*/
      ctx2[2] !== "blank"
    )
      return 2;
    return -1;
  }
  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if (~current_block_type_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        }
      } else {
        if (if_block) {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
        }
        if (~current_block_type_index) {
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        } else {
          if_block = null;
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(if_block_anchor);
      }
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let type;
  let icon;
  let iconTheme;
  let { toast: toast2 } = $$props;
  $$self.$$set = ($$props2) => {
    if ("toast" in $$props2)
      $$invalidate(3, toast2 = $$props2.toast);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*toast*/
    8) {
      $$invalidate(2, { type, icon, iconTheme } = toast2, type, ($$invalidate(1, icon), $$invalidate(3, toast2)), ($$invalidate(0, iconTheme), $$invalidate(3, toast2)));
    }
  };
  return [iconTheme, icon, type, toast2];
}
class ToastIcon extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, { toast: 3 });
  }
}
function create_else_block$2(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*toast*/
    ctx[0].message
  );
  function switch_props(ctx2, dirty) {
    return { props: { toast: (
      /*toast*/
      ctx2[0]
    ) } };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*toast*/
      1 && switch_value !== (switch_value = /*toast*/
      ctx2[0].message)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*toast*/
        1)
          switch_instance_changes.toast = /*toast*/
          ctx2[0];
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block$2(ctx) {
  let t_value = (
    /*toast*/
    ctx[0].message + ""
  );
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*toast*/
      1 && t_value !== (t_value = /*toast*/
      ctx2[0].message + ""))
        set_data(t, t_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_fragment$4(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block$2, create_else_block$2];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (typeof /*toast*/
    ctx2[0].message === "string")
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let div_levels = [
    { class: "message" },
    /*toast*/
    ctx[0].ariaProps
  ];
  let div_data = {};
  for (let i = 0; i < div_levels.length; i += 1) {
    div_data = assign(div_data, div_levels[i]);
  }
  return {
    c() {
      div = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      set_attributes(div, div_data);
      toggle_class(div, "svelte-1nauejd", true);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, null);
      }
      set_attributes(div, div_data = get_spread_update(div_levels, [{ class: "message" }, dirty & /*toast*/
      1 && /*toast*/
      ctx2[0].ariaProps]));
      toggle_class(div, "svelte-1nauejd", true);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if_blocks[current_block_type_index].d();
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { toast: toast2 } = $$props;
  $$self.$$set = ($$props2) => {
    if ("toast" in $$props2)
      $$invalidate(0, toast2 = $$props2.toast);
  };
  return [toast2];
}
class ToastMessage extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, { toast: 0 });
  }
}
const get_default_slot_changes$1 = (dirty) => ({ toast: dirty & /*toast*/
1 });
const get_default_slot_context$1 = (ctx) => ({
  ToastIcon,
  ToastMessage,
  toast: (
    /*toast*/
    ctx[0]
  )
});
function create_else_block$1(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[6].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[7],
    get_default_slot_context$1
  );
  const default_slot_or_fallback = default_slot || fallback_block$1(ctx);
  return {
    c() {
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
    },
    l(nodes) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(nodes);
    },
    m(target, anchor) {
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, toast*/
        129)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[7],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[7]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[7],
              dirty,
              get_default_slot_changes$1
            ),
            get_default_slot_context$1
          );
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & /*toast*/
        1)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
    }
  };
}
function create_if_block$1(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*Component*/
    ctx[2]
  );
  function switch_props(ctx2, dirty) {
    return {
      props: {
        $$slots: {
          message: [create_message_slot],
          icon: [create_icon_slot]
        },
        $$scope: { ctx: ctx2 }
      }
    };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*Component*/
      4 && switch_value !== (switch_value = /*Component*/
      ctx2[2])) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = construct_svelte_component(switch_value, switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*$$scope, toast*/
        129) {
          switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
        }
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(switch_instance_anchor);
      }
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function fallback_block$1(ctx) {
  let toasticon;
  let t;
  let toastmessage;
  let current;
  toasticon = new ToastIcon({ props: { toast: (
    /*toast*/
    ctx[0]
  ) } });
  toastmessage = new ToastMessage({ props: { toast: (
    /*toast*/
    ctx[0]
  ) } });
  return {
    c() {
      create_component(toasticon.$$.fragment);
      t = space();
      create_component(toastmessage.$$.fragment);
    },
    l(nodes) {
      claim_component(toasticon.$$.fragment, nodes);
      t = claim_space(nodes);
      claim_component(toastmessage.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(toasticon, target, anchor);
      insert_hydration(target, t, anchor);
      mount_component(toastmessage, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const toasticon_changes = {};
      if (dirty & /*toast*/
      1)
        toasticon_changes.toast = /*toast*/
        ctx2[0];
      toasticon.$set(toasticon_changes);
      const toastmessage_changes = {};
      if (dirty & /*toast*/
      1)
        toastmessage_changes.toast = /*toast*/
        ctx2[0];
      toastmessage.$set(toastmessage_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toasticon.$$.fragment, local);
      transition_in(toastmessage.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toasticon.$$.fragment, local);
      transition_out(toastmessage.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
      destroy_component(toasticon, detaching);
      destroy_component(toastmessage, detaching);
    }
  };
}
function create_icon_slot(ctx) {
  let toasticon;
  let current;
  toasticon = new ToastIcon({
    props: { toast: (
      /*toast*/
      ctx[0]
    ), slot: "icon" }
  });
  return {
    c() {
      create_component(toasticon.$$.fragment);
    },
    l(nodes) {
      claim_component(toasticon.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(toasticon, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const toasticon_changes = {};
      if (dirty & /*toast*/
      1)
        toasticon_changes.toast = /*toast*/
        ctx2[0];
      toasticon.$set(toasticon_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toasticon.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toasticon.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toasticon, detaching);
    }
  };
}
function create_message_slot(ctx) {
  let toastmessage;
  let current;
  toastmessage = new ToastMessage({
    props: { toast: (
      /*toast*/
      ctx[0]
    ), slot: "message" }
  });
  return {
    c() {
      create_component(toastmessage.$$.fragment);
    },
    l(nodes) {
      claim_component(toastmessage.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(toastmessage, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const toastmessage_changes = {};
      if (dirty & /*toast*/
      1)
        toastmessage_changes.toast = /*toast*/
        ctx2[0];
      toastmessage.$set(toastmessage_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toastmessage.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toastmessage.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toastmessage, detaching);
    }
  };
}
function create_fragment$3(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let div_class_value;
  let div_style_value;
  let current;
  const if_block_creators = [create_if_block$1, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*Component*/
      ctx2[2]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, style: true });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = "base " + /*toast*/
      (ctx[0].height ? (
        /*animation*/
        ctx[4]
      ) : "transparent") + " " + /*toast*/
      (ctx[0].className || "") + " svelte-ug60r4");
      attr(div, "style", div_style_value = /*style*/
      ctx[1] + "; " + /*toast*/
      ctx[0].style);
      set_style(
        div,
        "--factor",
        /*factor*/
        ctx[3]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, null);
      }
      if (!current || dirty & /*toast, animation*/
      17 && div_class_value !== (div_class_value = "base " + /*toast*/
      (ctx2[0].height ? (
        /*animation*/
        ctx2[4]
      ) : "transparent") + " " + /*toast*/
      (ctx2[0].className || "") + " svelte-ug60r4")) {
        attr(div, "class", div_class_value);
      }
      if (!current || dirty & /*style, toast*/
      3 && div_style_value !== (div_style_value = /*style*/
      ctx2[1] + "; " + /*toast*/
      ctx2[0].style)) {
        attr(div, "style", div_style_value);
      }
      const style_changed = dirty & /*style, toast*/
      3;
      if (dirty & /*factor, style, toast*/
      11 || style_changed) {
        set_style(
          div,
          "--factor",
          /*factor*/
          ctx2[3]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if_blocks[current_block_type_index].d();
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { toast: toast2 } = $$props;
  let { position = void 0 } = $$props;
  let { style = "" } = $$props;
  let { Component = void 0 } = $$props;
  let factor;
  let animation;
  $$self.$$set = ($$props2) => {
    if ("toast" in $$props2)
      $$invalidate(0, toast2 = $$props2.toast);
    if ("position" in $$props2)
      $$invalidate(5, position = $$props2.position);
    if ("style" in $$props2)
      $$invalidate(1, style = $$props2.style);
    if ("Component" in $$props2)
      $$invalidate(2, Component = $$props2.Component);
    if ("$$scope" in $$props2)
      $$invalidate(7, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*toast, position*/
    33) {
      {
        const top = (toast2.position || position || "top-center").includes("top");
        $$invalidate(3, factor = top ? 1 : -1);
        const [enter, exit] = prefersReducedMotion() ? ["fadeIn", "fadeOut"] : ["enter", "exit"];
        $$invalidate(4, animation = toast2.visible ? enter : exit);
      }
    }
  };
  return [toast2, style, Component, factor, animation, position, slots, $$scope];
}
class ToastBar extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      toast: 0,
      position: 5,
      style: 1,
      Component: 2
    });
  }
}
const get_default_slot_changes = (dirty) => ({ toast: dirty & /*toast*/
1 });
const get_default_slot_context = (ctx) => ({ toast: (
  /*toast*/
  ctx[0]
) });
function create_else_block(ctx) {
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[8].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[7],
    get_default_slot_context
  );
  const default_slot_or_fallback = default_slot || fallback_block(ctx);
  return {
    c() {
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
    },
    l(nodes) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(nodes);
    },
    m(target, anchor) {
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, toast*/
        129)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[7],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[7]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[7],
              dirty,
              get_default_slot_changes
            ),
            get_default_slot_context
          );
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & /*toast*/
        1)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
    }
  };
}
function create_if_block(ctx) {
  let toastmessage;
  let current;
  toastmessage = new ToastMessage({ props: { toast: (
    /*toast*/
    ctx[0]
  ) } });
  return {
    c() {
      create_component(toastmessage.$$.fragment);
    },
    l(nodes) {
      claim_component(toastmessage.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(toastmessage, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const toastmessage_changes = {};
      if (dirty & /*toast*/
      1)
        toastmessage_changes.toast = /*toast*/
        ctx2[0];
      toastmessage.$set(toastmessage_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toastmessage.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toastmessage.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toastmessage, detaching);
    }
  };
}
function fallback_block(ctx) {
  let toastbar;
  let current;
  toastbar = new ToastBar({
    props: {
      toast: (
        /*toast*/
        ctx[0]
      ),
      position: (
        /*toast*/
        ctx[0].position
      )
    }
  });
  return {
    c() {
      create_component(toastbar.$$.fragment);
    },
    l(nodes) {
      claim_component(toastbar.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(toastbar, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const toastbar_changes = {};
      if (dirty & /*toast*/
      1)
        toastbar_changes.toast = /*toast*/
        ctx2[0];
      if (dirty & /*toast*/
      1)
        toastbar_changes.position = /*toast*/
        ctx2[0].position;
      toastbar.$set(toastbar_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toastbar.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toastbar.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(toastbar, detaching);
    }
  };
}
function create_fragment$2(ctx) {
  let div;
  let current_block_type_index;
  let if_block;
  let current;
  const if_block_creators = [create_if_block, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*toast*/
      ctx2[0].type === "custom"
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      div = element("div");
      if_block.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "wrapper svelte-v01oml");
      toggle_class(
        div,
        "active",
        /*toast*/
        ctx[0].visible
      );
      toggle_class(div, "transition", !prefersReducedMotion());
      set_style(
        div,
        "--factor",
        /*factor*/
        ctx[3]
      );
      set_style(
        div,
        "--offset",
        /*toast*/
        ctx[0].offset
      );
      set_style(
        div,
        "top",
        /*top*/
        ctx[5]
      );
      set_style(
        div,
        "bottom",
        /*bottom*/
        ctx[4]
      );
      set_style(
        div,
        "justify-content",
        /*justifyContent*/
        ctx[2]
      );
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if_blocks[current_block_type_index].m(div, null);
      ctx[9](div);
      current = true;
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div, null);
      }
      if (!current || dirty & /*toast*/
      1) {
        toggle_class(
          div,
          "active",
          /*toast*/
          ctx2[0].visible
        );
      }
      if (dirty & /*factor*/
      8) {
        set_style(
          div,
          "--factor",
          /*factor*/
          ctx2[3]
        );
      }
      if (dirty & /*toast*/
      1) {
        set_style(
          div,
          "--offset",
          /*toast*/
          ctx2[0].offset
        );
      }
      if (dirty & /*top*/
      32) {
        set_style(
          div,
          "top",
          /*top*/
          ctx2[5]
        );
      }
      if (dirty & /*bottom*/
      16) {
        set_style(
          div,
          "bottom",
          /*bottom*/
          ctx2[4]
        );
      }
      if (dirty & /*justifyContent*/
      4) {
        set_style(
          div,
          "justify-content",
          /*justifyContent*/
          ctx2[2]
        );
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if_blocks[current_block_type_index].d();
      ctx[9](null);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let top;
  let bottom;
  let factor;
  let justifyContent;
  let { $$slots: slots = {}, $$scope } = $$props;
  let { toast: toast2 } = $$props;
  let { setHeight } = $$props;
  let wrapperEl;
  onMount(() => {
    setHeight(wrapperEl.getBoundingClientRect().height);
  });
  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      wrapperEl = $$value;
      $$invalidate(1, wrapperEl);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("toast" in $$props2)
      $$invalidate(0, toast2 = $$props2.toast);
    if ("setHeight" in $$props2)
      $$invalidate(6, setHeight = $$props2.setHeight);
    if ("$$scope" in $$props2)
      $$invalidate(7, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*toast*/
    1) {
      $$invalidate(5, top = toast2.position?.includes("top") ? 0 : null);
    }
    if ($$self.$$.dirty & /*toast*/
    1) {
      $$invalidate(4, bottom = toast2.position?.includes("bottom") ? 0 : null);
    }
    if ($$self.$$.dirty & /*toast*/
    1) {
      $$invalidate(3, factor = toast2.position?.includes("top") ? 1 : -1);
    }
    if ($$self.$$.dirty & /*toast*/
    1) {
      $$invalidate(2, justifyContent = toast2.position?.includes("center") && "center" || (toast2.position?.includes("right") || toast2.position?.includes("end")) && "flex-end" || null);
    }
  };
  return [
    toast2,
    wrapperEl,
    justifyContent,
    factor,
    bottom,
    top,
    setHeight,
    $$scope,
    slots,
    div_binding
  ];
}
class ToastWrapper extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { toast: 0, setHeight: 6 });
  }
}
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[11] = list[i];
  return child_ctx;
}
function create_each_block(key_1, ctx) {
  let first;
  let toastwrapper;
  let current;
  function func(...args) {
    return (
      /*func*/
      ctx[10](
        /*toast*/
        ctx[11],
        ...args
      )
    );
  }
  toastwrapper = new ToastWrapper({
    props: {
      toast: (
        /*toast*/
        ctx[11]
      ),
      setHeight: func
    }
  });
  return {
    key: key_1,
    first: null,
    c() {
      first = empty();
      create_component(toastwrapper.$$.fragment);
      this.h();
    },
    l(nodes) {
      first = empty();
      claim_component(toastwrapper.$$.fragment, nodes);
      this.h();
    },
    h() {
      this.first = first;
    },
    m(target, anchor) {
      insert_hydration(target, first, anchor);
      mount_component(toastwrapper, target, anchor);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      const toastwrapper_changes = {};
      if (dirty & /*_toasts*/
      4)
        toastwrapper_changes.toast = /*toast*/
        ctx[11];
      if (dirty & /*_toasts*/
      4)
        toastwrapper_changes.setHeight = func;
      toastwrapper.$set(toastwrapper_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(toastwrapper.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(toastwrapper.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(first);
      }
      destroy_component(toastwrapper, detaching);
    }
  };
}
function create_fragment$1(ctx) {
  let div;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let div_class_value;
  let current;
  let mounted;
  let dispose;
  let each_value = ensure_array_like(
    /*_toasts*/
    ctx[2]
  );
  const get_key = (ctx2) => (
    /*toast*/
    ctx2[11].id
  );
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  return {
    c() {
      div = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, style: true, role: true });
      var div_nodes = children(div);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div_nodes);
      }
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", div_class_value = "toaster " + /*containerClassName*/
      (ctx[1] || "") + " svelte-1phplh9");
      attr(
        div,
        "style",
        /*containerStyle*/
        ctx[0]
      );
      attr(div, "role", "alert");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      for (let i = 0; i < each_blocks.length; i += 1) {
        if (each_blocks[i]) {
          each_blocks[i].m(div, null);
        }
      }
      current = true;
      if (!mounted) {
        dispose = [
          listen(
            div,
            "mouseenter",
            /*handlers*/
            ctx[4].startPause
          ),
          listen(
            div,
            "mouseleave",
            /*handlers*/
            ctx[4].endPause
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*_toasts, handlers*/
      20) {
        each_value = ensure_array_like(
          /*_toasts*/
          ctx2[2]
        );
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div, outro_and_destroy_block, create_each_block, null, get_each_context);
        check_outros();
      }
      if (!current || dirty & /*containerClassName*/
      2 && div_class_value !== (div_class_value = "toaster " + /*containerClassName*/
      (ctx2[1] || "") + " svelte-1phplh9")) {
        attr(div, "class", div_class_value);
      }
      if (!current || dirty & /*containerStyle*/
      1) {
        attr(
          div,
          "style",
          /*containerStyle*/
          ctx2[0]
        );
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      mounted = false;
      run_all(dispose);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let $toasts;
  let { reverseOrder = false } = $$props;
  let { position = "top-center" } = $$props;
  let { toastOptions = void 0 } = $$props;
  let { gutter = 8 } = $$props;
  let { containerStyle = void 0 } = $$props;
  let { containerClassName = void 0 } = $$props;
  const { toasts, handlers: handlers2 } = useToaster(toastOptions);
  component_subscribe($$self, toasts, (value) => $$invalidate(9, $toasts = value));
  let _toasts;
  const func = (toast2, height) => handlers2.updateHeight(toast2.id, height);
  $$self.$$set = ($$props2) => {
    if ("reverseOrder" in $$props2)
      $$invalidate(5, reverseOrder = $$props2.reverseOrder);
    if ("position" in $$props2)
      $$invalidate(6, position = $$props2.position);
    if ("toastOptions" in $$props2)
      $$invalidate(7, toastOptions = $$props2.toastOptions);
    if ("gutter" in $$props2)
      $$invalidate(8, gutter = $$props2.gutter);
    if ("containerStyle" in $$props2)
      $$invalidate(0, containerStyle = $$props2.containerStyle);
    if ("containerClassName" in $$props2)
      $$invalidate(1, containerClassName = $$props2.containerClassName);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*$toasts, position, reverseOrder, gutter*/
    864) {
      $$invalidate(2, _toasts = $toasts.map((toast2) => ({
        ...toast2,
        position: toast2.position || position,
        offset: handlers2.calculateOffset(toast2, $toasts, {
          reverseOrder,
          gutter,
          defaultPosition: position
        })
      })));
    }
  };
  return [
    containerStyle,
    containerClassName,
    _toasts,
    toasts,
    handlers2,
    reverseOrder,
    position,
    toastOptions,
    gutter,
    $toasts,
    func
  ];
}
class Toaster extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      reverseOrder: 5,
      position: 6,
      toastOptions: 7,
      gutter: 8,
      containerStyle: 0,
      containerClassName: 1
    });
  }
}
function create_fragment(ctx) {
  let toaster;
  let t;
  let current;
  toaster = new Toaster({});
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      create_component(toaster.$$.fragment);
      t = space();
      if (default_slot)
        default_slot.c();
    },
    l(nodes) {
      claim_component(toaster.$$.fragment, nodes);
      t = claim_space(nodes);
      if (default_slot)
        default_slot.l(nodes);
    },
    m(target, anchor) {
      mount_component(toaster, target, anchor);
      insert_hydration(target, t, anchor);
      if (default_slot) {
        default_slot.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(toaster.$$.fragment, local);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(toaster.$$.fragment, local);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
      destroy_component(toaster, detaching);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Layout extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Layout as component,
  _layout as universal
};

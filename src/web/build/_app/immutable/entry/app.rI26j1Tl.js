import { s as safe_not_equal, b as afterUpdate, o as onMount, d as binding_callbacks, t as tick } from "../chunks/scheduler.IZExxfgS.js";
import { S as SvelteComponent, i as init, s as space, k as empty, f as claim_space, g as insert_hydration, l as transition_out, m as check_outros, n as transition_in, d as detach, e as element, c as claim_element, a as children, o as attr, p as set_style, t as text, b as claim_text, j as set_data, q as group_outros, r as construct_svelte_component, u as create_component, v as claim_component, w as mount_component, x as destroy_component } from "../chunks/index.zqg2Rxpq.js";
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    const links = document.getElementsByTagName("link");
    promise = Promise.all(deps.map((dep) => {
      dep = assetsURL(dep, importerUrl);
      if (dep in seen)
        return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      const isBaseRelative = !!importerUrl;
      if (isBaseRelative) {
        for (let i = links.length - 1; i >= 0; i--) {
          const link2 = links[i];
          if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
            return;
          }
        }
      } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) {
        link.as = "script";
        link.crossOrigin = "";
      }
      link.href = dep;
      document.head.appendChild(link);
      if (isCss) {
        return new Promise((res, rej) => {
          link.addEventListener("load", res);
          link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
        });
      }
    }));
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
const matchers = {};
function create_else_block(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][0]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_0*/
        ctx2[3]
      ),
      form: (
        /*form*/
        ctx2[2]
      )
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[12](switch_instance);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][0])) {
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
          ctx2[12](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_0*/
        8)
          switch_instance_changes.data = /*data_0*/
          ctx2[3];
        if (dirty & /*form*/
        4)
          switch_instance_changes.form = /*form*/
          ctx2[2];
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
      ctx[12](null);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block_2(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][0]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_0*/
        ctx2[3]
      ),
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx: ctx2 }
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[11](switch_instance);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][0])) {
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
          ctx2[11](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_0*/
        8)
          switch_instance_changes.data = /*data_0*/
          ctx2[3];
        if (dirty & /*$$scope, constructors, data_1, form, components*/
        8215) {
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
      ctx[11](null);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_default_slot(ctx) {
  let switch_instance;
  let switch_instance_anchor;
  let current;
  var switch_value = (
    /*constructors*/
    ctx[1][1]
  );
  function switch_props(ctx2, dirty) {
    let switch_instance_props = {
      data: (
        /*data_1*/
        ctx2[4]
      ),
      form: (
        /*form*/
        ctx2[2]
      )
    };
    return { props: switch_instance_props };
  }
  if (switch_value) {
    switch_instance = construct_svelte_component(switch_value, switch_props(ctx));
    ctx[10](switch_instance);
  }
  return {
    c() {
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      switch_instance_anchor = empty();
    },
    l(nodes2) {
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, nodes2);
      switch_instance_anchor = empty();
    },
    m(target, anchor) {
      if (switch_instance)
        mount_component(switch_instance, target, anchor);
      insert_hydration(target, switch_instance_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & /*constructors*/
      2 && switch_value !== (switch_value = /*constructors*/
      ctx2[1][1])) {
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
          ctx2[10](switch_instance);
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        const switch_instance_changes = {};
        if (dirty & /*data_1*/
        16)
          switch_instance_changes.data = /*data_1*/
          ctx2[4];
        if (dirty & /*form*/
        4)
          switch_instance_changes.form = /*form*/
          ctx2[2];
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
      ctx[10](null);
      if (switch_instance)
        destroy_component(switch_instance, detaching);
    }
  };
}
function create_if_block(ctx) {
  let div;
  let if_block = (
    /*navigated*/
    ctx[6] && create_if_block_1(ctx)
  );
  return {
    c() {
      div = element("div");
      if (if_block)
        if_block.c();
      this.h();
    },
    l(nodes2) {
      div = claim_element(nodes2, "DIV", {
        id: true,
        "aria-live": true,
        "aria-atomic": true,
        style: true
      });
      var div_nodes = children(div);
      if (if_block)
        if_block.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "id", "svelte-announcer");
      attr(div, "aria-live", "assertive");
      attr(div, "aria-atomic", "true");
      set_style(div, "position", "absolute");
      set_style(div, "left", "0");
      set_style(div, "top", "0");
      set_style(div, "clip", "rect(0 0 0 0)");
      set_style(div, "clip-path", "inset(50%)");
      set_style(div, "overflow", "hidden");
      set_style(div, "white-space", "nowrap");
      set_style(div, "width", "1px");
      set_style(div, "height", "1px");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block)
        if_block.m(div, null);
    },
    p(ctx2, dirty) {
      if (
        /*navigated*/
        ctx2[6]
      ) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block_1(ctx2);
          if_block.c();
          if_block.m(div, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    d(detaching) {
      if (detaching) {
        detach(div);
      }
      if (if_block)
        if_block.d();
    }
  };
}
function create_if_block_1(ctx) {
  let t;
  return {
    c() {
      t = text(
        /*title*/
        ctx[7]
      );
    },
    l(nodes2) {
      t = claim_text(
        nodes2,
        /*title*/
        ctx[7]
      );
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*title*/
      128)
        set_data(
          t,
          /*title*/
          ctx2[7]
        );
    },
    d(detaching) {
      if (detaching) {
        detach(t);
      }
    }
  };
}
function create_fragment(ctx) {
  let current_block_type_index;
  let if_block0;
  let t;
  let if_block1_anchor;
  let current;
  const if_block_creators = [create_if_block_2, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (
      /*constructors*/
      ctx2[1][1]
    )
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  let if_block1 = (
    /*mounted*/
    ctx[5] && create_if_block(ctx)
  );
  return {
    c() {
      if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      if_block1_anchor = empty();
    },
    l(nodes2) {
      if_block0.l(nodes2);
      t = claim_space(nodes2);
      if (if_block1)
        if_block1.l(nodes2);
      if_block1_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, t, anchor);
      if (if_block1)
        if_block1.m(target, anchor);
      insert_hydration(target, if_block1_anchor, anchor);
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
        if_block0 = if_blocks[current_block_type_index];
        if (!if_block0) {
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block0.c();
        } else {
          if_block0.p(ctx2, dirty);
        }
        transition_in(if_block0, 1);
        if_block0.m(t.parentNode, t);
      }
      if (
        /*mounted*/
        ctx2[5]
      ) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
        } else {
          if_block1 = create_if_block(ctx2);
          if_block1.c();
          if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
        }
      } else if (if_block1) {
        if_block1.d(1);
        if_block1 = null;
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      current = false;
    },
    d(detaching) {
      if (detaching) {
        detach(t);
        detach(if_block1_anchor);
      }
      if_blocks[current_block_type_index].d(detaching);
      if (if_block1)
        if_block1.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  afterUpdate(stores.page.notify);
  let mounted = false;
  let navigated = false;
  let title = null;
  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        $$invalidate(6, navigated = true);
        tick().then(() => {
          $$invalidate(7, title = document.title || "untitled page");
        });
      }
    });
    $$invalidate(5, mounted = true);
    return unsubscribe;
  });
  function switch_instance_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[1] = $$value;
      $$invalidate(0, components);
    });
  }
  function switch_instance_binding_1($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[0] = $$value;
      $$invalidate(0, components);
    });
  }
  function switch_instance_binding_2($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      components[0] = $$value;
      $$invalidate(0, components);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("stores" in $$props2)
      $$invalidate(8, stores = $$props2.stores);
    if ("page" in $$props2)
      $$invalidate(9, page = $$props2.page);
    if ("constructors" in $$props2)
      $$invalidate(1, constructors = $$props2.constructors);
    if ("components" in $$props2)
      $$invalidate(0, components = $$props2.components);
    if ("form" in $$props2)
      $$invalidate(2, form = $$props2.form);
    if ("data_0" in $$props2)
      $$invalidate(3, data_0 = $$props2.data_0);
    if ("data_1" in $$props2)
      $$invalidate(4, data_1 = $$props2.data_1);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*stores, page*/
    768) {
      stores.page.set(page);
    }
  };
  return [
    components,
    constructors,
    form,
    data_0,
    data_1,
    mounted,
    navigated,
    title,
    stores,
    page,
    switch_instance_binding,
    switch_instance_binding_1,
    switch_instance_binding_2
  ];
}
class Root extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      stores: 8,
      page: 9,
      constructors: 1,
      components: 0,
      form: 2,
      data_0: 3,
      data_1: 4
    });
  }
}
const nodes = [
  () => __vitePreload(() => import("../nodes/0.3TwaSqTj.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/1.keXLDHPU.js"), true ? __vite__mapDeps([7,1,2,8,4]) : void 0, import.meta.url),
  () => __vitePreload(() => import("../nodes/2.BEMDFAAu.js"), true ? __vite__mapDeps([9,1,2,3,4,5]) : void 0, import.meta.url)
];
const server_loads = [];
const dictionary = {
  "/": [2]
};
const hooks = {
  handleError: ({ error }) => {
    console.error(error);
  },
  reroute: () => {
  }
};
export {
  dictionary,
  hooks,
  matchers,
  nodes,
  Root as root,
  server_loads
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.3TwaSqTj.js","../chunks/scheduler.IZExxfgS.js","../chunks/index.zqg2Rxpq.js","../chunks/Toaster.svelte_svelte_type_style_lang.Aum9VTgW.js","../chunks/index.EkDD9cK_.js","../assets/Toaster.xp7lzkuo.css","../assets/0.n-ZHru46.css","../nodes/1.keXLDHPU.js","../chunks/entry.ljuy36wx.js","../nodes/2.BEMDFAAu.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

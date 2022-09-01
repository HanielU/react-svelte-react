import { Context } from "$contexts";
import SvelteWrapper from "$svelte/Component";
import Rxt from "$svelte/Rxt.svelte";
import { useEffect, useRef, useState } from "react";

/* export default function SvelteApp() {
  const [a, setA] = useState("hello");
  const [context, setContext] = useState("");
  const componentRef = useRef<{ handleLogin(): void }>(null);

  return (
    <Context.Provider value={context}>
      <SvelteWrapper email={a} onEmailChange={setA} ref={componentRef} />

      <hr />
      <div className="p-8">
        <h1 className="text-2xl">React</h1>
        <div>a: {a}</div>
        <div>context: {context}</div>

        <br />

        <input
          className="input w-full bg-base-300 mb-5"
          type="text"
          value={context}
          onChange={e => setContext(e.target.value)}
        />
        <input
          className="input w-full bg-base-300 mb-5"
          type="text"
          value={a}
          onChange={e => setA(e.target.value)}
        />

        <button className="btn" onClick={() => componentRef.current?.handleLogin()}>
          Reset
        </button>
      </div>
    </Context.Provider>
  );
}
 */

export default function SvelteApp() {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const app = new Rxt({
      target: divRef.current as Element
    });

    return () => app.$destroy();
  }, [divRef]);

  return <div ref={divRef}></div>;
}

import ComponentSvelte from "$svelte/Component.svelte";
import type Component__SvelteComponent_ from "$svelte/Component.svelte";
import { Context } from "$contexts";
import { bind } from "svelte/internal";
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  type Dispatch,
  type ForwardedRef,
  type SetStateAction
} from "react";
import { writable } from "svelte/store";

type Props = {
  email: string;
  onEmailChange: Dispatch<SetStateAction<string>>;
};

const SvelteWrapper = (
  { email, onEmailChange }: Props,
  ref: ForwardedRef<{ handleLogin(): void }>
) => {
  const divRef = useRef<HTMLDivElement>(null);
  const componentRef = useRef<Component__SvelteComponent_>();
  const contextValue = useContext(Context);
  const storeRef = useRef(writable(contextValue));

  useImperativeHandle(ref, () => ({ handleLogin: () => componentRef.current?.handleLogin() }));

  useEffect(() => {
    if (storeRef.current !== undefined) storeRef.current.set(contextValue);
  }, [contextValue]);

  useEffect(() => {
    componentRef.current = new ComponentSvelte({
      target: divRef.current as Element,
      props: { email },
      context: new Map([["context", storeRef.current]])
    });

    // used to sync email prop with svelte component prop
    // equivalent to <ComponentSvelte bind:email={email} />
    bind(componentRef.current, "email", onEmailChange);

    return () => componentRef.current?.$destroy();
  }, [divRef]);

  useEffect(() => componentRef.current?.$set({ email }), [email]);

  return <div ref={divRef} />;
};

export default forwardRef(SvelteWrapper);

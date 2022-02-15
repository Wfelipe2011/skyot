import { skyotLogger } from "./SkyotLoggerPino";

type TState = {
  propertyKey: string;
  args: any[];
  methodOriginal: any;
  context: any;
};

export function SkyotLogger(params?: { isObject: boolean }) {
  const state = {} as TState;

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const methodOriginal = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      state.propertyKey = propertyKey;
      state.args = args;
      state.methodOriginal = methodOriginal;
      state.context = this;
      return await coreDecorator();
    };
  };

  async function coreDecorator() {
    const { args, methodOriginal, propertyKey, context } = state;
    skyotLogger(`Method => ${propertyKey}`);
    checkLoggerObject();
    const result = await methodOriginal.apply(context, args);
    skyotLogger(`${propertyKey} return => ${result}`);
    return result;
  }

  function checkLoggerObject() {
    if (!params?.isObject) return skyotLogger(`Params => ${state.args}`);
    skyotLogger(` --- Object ---`);
    skyotLogger(state.args);
  }
}

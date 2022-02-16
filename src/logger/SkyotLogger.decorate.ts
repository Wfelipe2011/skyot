import { logger } from "./SkyotLoggerPino";

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
    logger(`Method => ${jsonLog(propertyKey)}`);
    logger('Params => ' + jsonLog(args))
    const result = await methodOriginal.apply(context, args);
    logger('Return => ' + jsonLog(result))
    return result;
  }

  function jsonLog(obj) {
    return JSON.stringify(obj, null, 2);
  }
}

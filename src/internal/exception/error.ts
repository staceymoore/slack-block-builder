export class BlockBuilderError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BlockBuilderError';

    const errorWithStackTrace = Error as ErrorConstructor & {
      captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    };

    errorWithStackTrace.captureStackTrace(this, this.constructor);
  }
}

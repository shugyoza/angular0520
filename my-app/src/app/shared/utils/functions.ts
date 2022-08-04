
// function to return a UTC string date in the future given the amount of seconds passed as argument.
export const setExpireTime: Function = (seconds: number): string => {
    const now = new Date().toUTCString()
      , unixNow = Date.parse(now)
      , unixExp = unixNow + seconds
      , exp = new Date(unixExp).toUTCString();
    return exp;
  }

export const setExpireInUnix: Function = (seconds: number): number => {
    const now: string = new Date().toUTCString()
    ,   unixNow: number = Date.parse(now)
    ,   unixExp: number = unixNow + seconds;
    return unixExp;
}

export const nowInUnix: Function = (): number => {
    const now: string = new Date().toUTCString()
    ,   unixNow: number = Date.parse(now);
    return unixNow;
}

// method subscribe to for development phase, subscribing to observable and pushing it into a subscription
export function devSubscribeTo(
  observable: any,
  subscriptions$: any[] | undefined,
  message: string = '',
  cbNext: Function | undefined,
  cbError: Function | undefined,
  cbComplete: Function = () => {
    const date: Date = new Date()
        , logTime: string = `${date.getUTCMinutes()}:${date.getUTCSeconds()}:${date.getUTCMilliseconds()}`;
    console.log(`${logTime}.${message} completed`);
  }
  ): void  {

  const observer = {
    next: (response: any) => {
      const date: Date = new Date()
          , logTime: string = `${date.getUTCMinutes()}:${date.getUTCSeconds()}:${date.getUTCMilliseconds()}`;
      console.log(`${logTime}.${message} received next: `, response);
      if (cbNext) console.log(`${logTime}.${message} next processed, returned: `, cbNext(response))
    },
    error: (err: Error): void => {
      const date = new Date()
        , logTime: string = `${date.getUTCMinutes()}:${date.getUTCSeconds()}:${date.getUTCMilliseconds()}`;
      console.error(`${logTime}.${message} failed with error: `, err);
      if (cbError) console.error(`${logTime}.${message} error processed and returned: `, cbError(err) );
    },
    complete: cbComplete
  }
  const subscription$ = observable.subscribe(observer);
  if (subscriptions$) subscriptions$.push(subscription$);
}

// method subscribeTo for production
export function subscribeTo(
  observable: any,
  subscriptions$: any[] | undefined,
  message: string = '',
  next: Function,
  error: Function = (err: Error): void => {
    const date: Date = new Date()
        , logTime: string = `${date.getUTCMinutes()}:${date.getUTCSeconds()}:${date.getUTCMilliseconds()}`;
    console.error(`${logTime}.${message} failed with error: `, err);
  },
  complete: Function = () => {
    const date: Date = new Date()
        , logTime: string = `${date.getUTCMinutes()}:${date.getUTCSeconds()}:${date.getUTCMilliseconds()}`;
    console.log(`${logTime}.${message} completed`)
  }): void  {

  const observer = {
    next,
    error,
    complete
  }
  const subscription$ = observable.subscribe(observer);
  if (subscriptions$) subscriptions$.push(subscription$);
}
   /* // Implementation of the above two methods
  onTest() {
    subscribeTo( // devSubcribeTo(
      this.authentication.user$,
      this.subscriptions$,
      'onTest()',
      (res: any) => this.user = res,
      () => 'ERROR!',
      undefined,
    )
  } */



export const newObserver: Function = (next: Function, error: Function, complete: Function | null) => {
  return { next, error, complete };
}

export const newSubscription: Function = (observable: any, observer: any, subscriptions$: any[] | null) => {
  const subscription$ = observable.subscribe(observer);
  if (subscriptions$) subscriptions$.push(subscription$);
  return subscription$;
}

export const log: Function = (message: string, ...args: any) => {
  const date: Date = new Date()
  , logTime: string = `${date.getUTCMinutes()}:${date.getUTCSeconds()}:${date.getUTCMilliseconds()}`;
  console.log(`${logTime}.${message}`, ...args);
}

export const logError: Function = (message: string, err: Error, ...args: any) => {
  const date: Date = new Date()
  , logTime: string = `${date.getUTCMinutes()}:${date.getUTCSeconds()}:${date.getUTCMilliseconds()}`;
  console.error(`${logTime}.${message} failed :`, ...args);
}

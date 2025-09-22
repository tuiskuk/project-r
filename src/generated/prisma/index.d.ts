
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Marker
 * 
 */
export type Marker = $Result.DefaultSelection<Prisma.$MarkerPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model TargetGroup
 * 
 */
export type TargetGroup = $Result.DefaultSelection<Prisma.$TargetGroupPayload>
/**
 * Model EventTargetGroups
 * 
 */
export type EventTargetGroups = $Result.DefaultSelection<Prisma.$EventTargetGroupsPayload>
/**
 * Model Signup
 * 
 */
export type Signup = $Result.DefaultSelection<Prisma.$SignupPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Markers
 * const markers = await prisma.marker.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Markers
   * const markers = await prisma.marker.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.marker`: Exposes CRUD operations for the **Marker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Markers
    * const markers = await prisma.marker.findMany()
    * ```
    */
  get marker(): Prisma.MarkerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.targetGroup`: Exposes CRUD operations for the **TargetGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TargetGroups
    * const targetGroups = await prisma.targetGroup.findMany()
    * ```
    */
  get targetGroup(): Prisma.TargetGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventTargetGroups`: Exposes CRUD operations for the **EventTargetGroups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventTargetGroups
    * const eventTargetGroups = await prisma.eventTargetGroups.findMany()
    * ```
    */
  get eventTargetGroups(): Prisma.EventTargetGroupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.signup`: Exposes CRUD operations for the **Signup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Signups
    * const signups = await prisma.signup.findMany()
    * ```
    */
  get signup(): Prisma.SignupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Marker: 'Marker',
    User: 'User',
    Event: 'Event',
    TargetGroup: 'TargetGroup',
    EventTargetGroups: 'EventTargetGroups',
    Signup: 'Signup',
    Role: 'Role'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "marker" | "user" | "event" | "targetGroup" | "eventTargetGroups" | "signup" | "role"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Marker: {
        payload: Prisma.$MarkerPayload<ExtArgs>
        fields: Prisma.MarkerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarkerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarkerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkerPayload>
          }
          findFirst: {
            args: Prisma.MarkerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarkerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkerPayload>
          }
          findMany: {
            args: Prisma.MarkerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkerPayload>[]
          }
          create: {
            args: Prisma.MarkerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkerPayload>
          }
          createMany: {
            args: Prisma.MarkerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarkerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkerPayload>[]
          }
          delete: {
            args: Prisma.MarkerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkerPayload>
          }
          update: {
            args: Prisma.MarkerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkerPayload>
          }
          deleteMany: {
            args: Prisma.MarkerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarkerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarkerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkerPayload>[]
          }
          upsert: {
            args: Prisma.MarkerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkerPayload>
          }
          aggregate: {
            args: Prisma.MarkerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarker>
          }
          groupBy: {
            args: Prisma.MarkerGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarkerGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarkerCountArgs<ExtArgs>
            result: $Utils.Optional<MarkerCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      TargetGroup: {
        payload: Prisma.$TargetGroupPayload<ExtArgs>
        fields: Prisma.TargetGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TargetGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TargetGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetGroupPayload>
          }
          findFirst: {
            args: Prisma.TargetGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TargetGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetGroupPayload>
          }
          findMany: {
            args: Prisma.TargetGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetGroupPayload>[]
          }
          create: {
            args: Prisma.TargetGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetGroupPayload>
          }
          createMany: {
            args: Prisma.TargetGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TargetGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetGroupPayload>[]
          }
          delete: {
            args: Prisma.TargetGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetGroupPayload>
          }
          update: {
            args: Prisma.TargetGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetGroupPayload>
          }
          deleteMany: {
            args: Prisma.TargetGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TargetGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TargetGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetGroupPayload>[]
          }
          upsert: {
            args: Prisma.TargetGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TargetGroupPayload>
          }
          aggregate: {
            args: Prisma.TargetGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTargetGroup>
          }
          groupBy: {
            args: Prisma.TargetGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<TargetGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.TargetGroupCountArgs<ExtArgs>
            result: $Utils.Optional<TargetGroupCountAggregateOutputType> | number
          }
        }
      }
      EventTargetGroups: {
        payload: Prisma.$EventTargetGroupsPayload<ExtArgs>
        fields: Prisma.EventTargetGroupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventTargetGroupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTargetGroupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventTargetGroupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTargetGroupsPayload>
          }
          findFirst: {
            args: Prisma.EventTargetGroupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTargetGroupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventTargetGroupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTargetGroupsPayload>
          }
          findMany: {
            args: Prisma.EventTargetGroupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTargetGroupsPayload>[]
          }
          create: {
            args: Prisma.EventTargetGroupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTargetGroupsPayload>
          }
          createMany: {
            args: Prisma.EventTargetGroupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventTargetGroupsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTargetGroupsPayload>[]
          }
          delete: {
            args: Prisma.EventTargetGroupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTargetGroupsPayload>
          }
          update: {
            args: Prisma.EventTargetGroupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTargetGroupsPayload>
          }
          deleteMany: {
            args: Prisma.EventTargetGroupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventTargetGroupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventTargetGroupsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTargetGroupsPayload>[]
          }
          upsert: {
            args: Prisma.EventTargetGroupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTargetGroupsPayload>
          }
          aggregate: {
            args: Prisma.EventTargetGroupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventTargetGroups>
          }
          groupBy: {
            args: Prisma.EventTargetGroupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventTargetGroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventTargetGroupsCountArgs<ExtArgs>
            result: $Utils.Optional<EventTargetGroupsCountAggregateOutputType> | number
          }
        }
      }
      Signup: {
        payload: Prisma.$SignupPayload<ExtArgs>
        fields: Prisma.SignupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload>
          }
          findFirst: {
            args: Prisma.SignupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload>
          }
          findMany: {
            args: Prisma.SignupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload>[]
          }
          create: {
            args: Prisma.SignupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload>
          }
          createMany: {
            args: Prisma.SignupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SignupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload>[]
          }
          delete: {
            args: Prisma.SignupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload>
          }
          update: {
            args: Prisma.SignupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload>
          }
          deleteMany: {
            args: Prisma.SignupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SignupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload>[]
          }
          upsert: {
            args: Prisma.SignupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignupPayload>
          }
          aggregate: {
            args: Prisma.SignupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSignup>
          }
          groupBy: {
            args: Prisma.SignupGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignupGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignupCountArgs<ExtArgs>
            result: $Utils.Optional<SignupCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    marker?: MarkerOmit
    user?: UserOmit
    event?: EventOmit
    targetGroup?: TargetGroupOmit
    eventTargetGroups?: EventTargetGroupsOmit
    signup?: SignupOmit
    role?: RoleOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MarkerCountOutputType
   */

  export type MarkerCountOutputType = {
    User: number
  }

  export type MarkerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | MarkerCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * MarkerCountOutputType without action
   */
  export type MarkerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkerCountOutputType
     */
    select?: MarkerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarkerCountOutputType without action
   */
  export type MarkerCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    events: number
    signups: number
    roles: number
    markers: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | UserCountOutputTypeCountEventsArgs
    signups?: boolean | UserCountOutputTypeCountSignupsArgs
    roles?: boolean | UserCountOutputTypeCountRolesArgs
    markers?: boolean | UserCountOutputTypeCountMarkersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSignupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignupWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMarkersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkerWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    targetGroups: number
    signups: number
    roles: number
    Marker: number
    User: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targetGroups?: boolean | EventCountOutputTypeCountTargetGroupsArgs
    signups?: boolean | EventCountOutputTypeCountSignupsArgs
    roles?: boolean | EventCountOutputTypeCountRolesArgs
    Marker?: boolean | EventCountOutputTypeCountMarkerArgs
    User?: boolean | EventCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTargetGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTargetGroupsWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountSignupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignupWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountMarkerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkerWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type TargetGroupCountOutputType
   */

  export type TargetGroupCountOutputType = {
    events: number
  }

  export type TargetGroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | TargetGroupCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * TargetGroupCountOutputType without action
   */
  export type TargetGroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetGroupCountOutputType
     */
    select?: TargetGroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TargetGroupCountOutputType without action
   */
  export type TargetGroupCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTargetGroupsWhereInput
  }


  /**
   * Count Type SignupCountOutputType
   */

  export type SignupCountOutputType = {
    User: number
  }

  export type SignupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | SignupCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * SignupCountOutputType without action
   */
  export type SignupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SignupCountOutputType
     */
    select?: SignupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SignupCountOutputType without action
   */
  export type SignupCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    User: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | RoleCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Marker
   */

  export type AggregateMarker = {
    _count: MarkerCountAggregateOutputType | null
    _avg: MarkerAvgAggregateOutputType | null
    _sum: MarkerSumAggregateOutputType | null
    _min: MarkerMinAggregateOutputType | null
    _max: MarkerMaxAggregateOutputType | null
  }

  export type MarkerAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type MarkerSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type MarkerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    type: string | null
    icon: string | null
    eventId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarkerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    latitude: number | null
    longitude: number | null
    type: string | null
    icon: string | null
    eventId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MarkerCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    latitude: number
    longitude: number
    type: number
    icon: number
    eventId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MarkerAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type MarkerSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type MarkerMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    latitude?: true
    longitude?: true
    type?: true
    icon?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarkerMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    latitude?: true
    longitude?: true
    type?: true
    icon?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MarkerCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    latitude?: true
    longitude?: true
    type?: true
    icon?: true
    eventId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MarkerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marker to aggregate.
     */
    where?: MarkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markers to fetch.
     */
    orderBy?: MarkerOrderByWithRelationInput | MarkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Markers
    **/
    _count?: true | MarkerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarkerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarkerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarkerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarkerMaxAggregateInputType
  }

  export type GetMarkerAggregateType<T extends MarkerAggregateArgs> = {
        [P in keyof T & keyof AggregateMarker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarker[P]>
      : GetScalarType<T[P], AggregateMarker[P]>
  }




  export type MarkerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkerWhereInput
    orderBy?: MarkerOrderByWithAggregationInput | MarkerOrderByWithAggregationInput[]
    by: MarkerScalarFieldEnum[] | MarkerScalarFieldEnum
    having?: MarkerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarkerCountAggregateInputType | true
    _avg?: MarkerAvgAggregateInputType
    _sum?: MarkerSumAggregateInputType
    _min?: MarkerMinAggregateInputType
    _max?: MarkerMaxAggregateInputType
  }

  export type MarkerGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string | null
    latitude: number
    longitude: number
    type: string
    icon: string | null
    eventId: string | null
    createdAt: Date
    updatedAt: Date
    _count: MarkerCountAggregateOutputType | null
    _avg: MarkerAvgAggregateOutputType | null
    _sum: MarkerSumAggregateOutputType | null
    _min: MarkerMinAggregateOutputType | null
    _max: MarkerMaxAggregateOutputType | null
  }

  type GetMarkerGroupByPayload<T extends MarkerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarkerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarkerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarkerGroupByOutputType[P]>
            : GetScalarType<T[P], MarkerGroupByOutputType[P]>
        }
      >
    >


  export type MarkerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    type?: boolean
    icon?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | Marker$eventArgs<ExtArgs>
    User?: boolean | Marker$UserArgs<ExtArgs>
    _count?: boolean | MarkerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marker"]>

  export type MarkerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    type?: boolean
    icon?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | Marker$eventArgs<ExtArgs>
  }, ExtArgs["result"]["marker"]>

  export type MarkerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    type?: boolean
    icon?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    event?: boolean | Marker$eventArgs<ExtArgs>
  }, ExtArgs["result"]["marker"]>

  export type MarkerSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    latitude?: boolean
    longitude?: boolean
    type?: boolean
    icon?: boolean
    eventId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MarkerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "latitude" | "longitude" | "type" | "icon" | "eventId" | "createdAt" | "updatedAt", ExtArgs["result"]["marker"]>
  export type MarkerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | Marker$eventArgs<ExtArgs>
    User?: boolean | Marker$UserArgs<ExtArgs>
    _count?: boolean | MarkerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarkerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | Marker$eventArgs<ExtArgs>
  }
  export type MarkerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | Marker$eventArgs<ExtArgs>
  }

  export type $MarkerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Marker"
    objects: {
      event: Prisma.$EventPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string | null
      latitude: number
      longitude: number
      type: string
      icon: string | null
      eventId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["marker"]>
    composites: {}
  }

  type MarkerGetPayload<S extends boolean | null | undefined | MarkerDefaultArgs> = $Result.GetResult<Prisma.$MarkerPayload, S>

  type MarkerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarkerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarkerCountAggregateInputType | true
    }

  export interface MarkerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Marker'], meta: { name: 'Marker' } }
    /**
     * Find zero or one Marker that matches the filter.
     * @param {MarkerFindUniqueArgs} args - Arguments to find a Marker
     * @example
     * // Get one Marker
     * const marker = await prisma.marker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarkerFindUniqueArgs>(args: SelectSubset<T, MarkerFindUniqueArgs<ExtArgs>>): Prisma__MarkerClient<$Result.GetResult<Prisma.$MarkerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarkerFindUniqueOrThrowArgs} args - Arguments to find a Marker
     * @example
     * // Get one Marker
     * const marker = await prisma.marker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarkerFindUniqueOrThrowArgs>(args: SelectSubset<T, MarkerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarkerClient<$Result.GetResult<Prisma.$MarkerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkerFindFirstArgs} args - Arguments to find a Marker
     * @example
     * // Get one Marker
     * const marker = await prisma.marker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarkerFindFirstArgs>(args?: SelectSubset<T, MarkerFindFirstArgs<ExtArgs>>): Prisma__MarkerClient<$Result.GetResult<Prisma.$MarkerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkerFindFirstOrThrowArgs} args - Arguments to find a Marker
     * @example
     * // Get one Marker
     * const marker = await prisma.marker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarkerFindFirstOrThrowArgs>(args?: SelectSubset<T, MarkerFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarkerClient<$Result.GetResult<Prisma.$MarkerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Markers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Markers
     * const markers = await prisma.marker.findMany()
     * 
     * // Get first 10 Markers
     * const markers = await prisma.marker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const markerWithIdOnly = await prisma.marker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarkerFindManyArgs>(args?: SelectSubset<T, MarkerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marker.
     * @param {MarkerCreateArgs} args - Arguments to create a Marker.
     * @example
     * // Create one Marker
     * const Marker = await prisma.marker.create({
     *   data: {
     *     // ... data to create a Marker
     *   }
     * })
     * 
     */
    create<T extends MarkerCreateArgs>(args: SelectSubset<T, MarkerCreateArgs<ExtArgs>>): Prisma__MarkerClient<$Result.GetResult<Prisma.$MarkerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Markers.
     * @param {MarkerCreateManyArgs} args - Arguments to create many Markers.
     * @example
     * // Create many Markers
     * const marker = await prisma.marker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarkerCreateManyArgs>(args?: SelectSubset<T, MarkerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Markers and returns the data saved in the database.
     * @param {MarkerCreateManyAndReturnArgs} args - Arguments to create many Markers.
     * @example
     * // Create many Markers
     * const marker = await prisma.marker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Markers and only return the `id`
     * const markerWithIdOnly = await prisma.marker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarkerCreateManyAndReturnArgs>(args?: SelectSubset<T, MarkerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Marker.
     * @param {MarkerDeleteArgs} args - Arguments to delete one Marker.
     * @example
     * // Delete one Marker
     * const Marker = await prisma.marker.delete({
     *   where: {
     *     // ... filter to delete one Marker
     *   }
     * })
     * 
     */
    delete<T extends MarkerDeleteArgs>(args: SelectSubset<T, MarkerDeleteArgs<ExtArgs>>): Prisma__MarkerClient<$Result.GetResult<Prisma.$MarkerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marker.
     * @param {MarkerUpdateArgs} args - Arguments to update one Marker.
     * @example
     * // Update one Marker
     * const marker = await prisma.marker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarkerUpdateArgs>(args: SelectSubset<T, MarkerUpdateArgs<ExtArgs>>): Prisma__MarkerClient<$Result.GetResult<Prisma.$MarkerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Markers.
     * @param {MarkerDeleteManyArgs} args - Arguments to filter Markers to delete.
     * @example
     * // Delete a few Markers
     * const { count } = await prisma.marker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarkerDeleteManyArgs>(args?: SelectSubset<T, MarkerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Markers
     * const marker = await prisma.marker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarkerUpdateManyArgs>(args: SelectSubset<T, MarkerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markers and returns the data updated in the database.
     * @param {MarkerUpdateManyAndReturnArgs} args - Arguments to update many Markers.
     * @example
     * // Update many Markers
     * const marker = await prisma.marker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Markers and only return the `id`
     * const markerWithIdOnly = await prisma.marker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MarkerUpdateManyAndReturnArgs>(args: SelectSubset<T, MarkerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Marker.
     * @param {MarkerUpsertArgs} args - Arguments to update or create a Marker.
     * @example
     * // Update or create a Marker
     * const marker = await prisma.marker.upsert({
     *   create: {
     *     // ... data to create a Marker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marker we want to update
     *   }
     * })
     */
    upsert<T extends MarkerUpsertArgs>(args: SelectSubset<T, MarkerUpsertArgs<ExtArgs>>): Prisma__MarkerClient<$Result.GetResult<Prisma.$MarkerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Markers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkerCountArgs} args - Arguments to filter Markers to count.
     * @example
     * // Count the number of Markers
     * const count = await prisma.marker.count({
     *   where: {
     *     // ... the filter for the Markers we want to count
     *   }
     * })
    **/
    count<T extends MarkerCountArgs>(
      args?: Subset<T, MarkerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarkerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MarkerAggregateArgs>(args: Subset<T, MarkerAggregateArgs>): Prisma.PrismaPromise<GetMarkerAggregateType<T>>

    /**
     * Group by Marker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MarkerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarkerGroupByArgs['orderBy'] }
        : { orderBy?: MarkerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MarkerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarkerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Marker model
   */
  readonly fields: MarkerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Marker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarkerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends Marker$eventArgs<ExtArgs> = {}>(args?: Subset<T, Marker$eventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    User<T extends Marker$UserArgs<ExtArgs> = {}>(args?: Subset<T, Marker$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Marker model
   */
  interface MarkerFieldRefs {
    readonly id: FieldRef<"Marker", 'String'>
    readonly userId: FieldRef<"Marker", 'String'>
    readonly title: FieldRef<"Marker", 'String'>
    readonly description: FieldRef<"Marker", 'String'>
    readonly latitude: FieldRef<"Marker", 'Float'>
    readonly longitude: FieldRef<"Marker", 'Float'>
    readonly type: FieldRef<"Marker", 'String'>
    readonly icon: FieldRef<"Marker", 'String'>
    readonly eventId: FieldRef<"Marker", 'String'>
    readonly createdAt: FieldRef<"Marker", 'DateTime'>
    readonly updatedAt: FieldRef<"Marker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Marker findUnique
   */
  export type MarkerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marker
     */
    select?: MarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marker
     */
    omit?: MarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkerInclude<ExtArgs> | null
    /**
     * Filter, which Marker to fetch.
     */
    where: MarkerWhereUniqueInput
  }

  /**
   * Marker findUniqueOrThrow
   */
  export type MarkerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marker
     */
    select?: MarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marker
     */
    omit?: MarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkerInclude<ExtArgs> | null
    /**
     * Filter, which Marker to fetch.
     */
    where: MarkerWhereUniqueInput
  }

  /**
   * Marker findFirst
   */
  export type MarkerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marker
     */
    select?: MarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marker
     */
    omit?: MarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkerInclude<ExtArgs> | null
    /**
     * Filter, which Marker to fetch.
     */
    where?: MarkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markers to fetch.
     */
    orderBy?: MarkerOrderByWithRelationInput | MarkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markers.
     */
    cursor?: MarkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markers.
     */
    distinct?: MarkerScalarFieldEnum | MarkerScalarFieldEnum[]
  }

  /**
   * Marker findFirstOrThrow
   */
  export type MarkerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marker
     */
    select?: MarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marker
     */
    omit?: MarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkerInclude<ExtArgs> | null
    /**
     * Filter, which Marker to fetch.
     */
    where?: MarkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markers to fetch.
     */
    orderBy?: MarkerOrderByWithRelationInput | MarkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markers.
     */
    cursor?: MarkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markers.
     */
    distinct?: MarkerScalarFieldEnum | MarkerScalarFieldEnum[]
  }

  /**
   * Marker findMany
   */
  export type MarkerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marker
     */
    select?: MarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marker
     */
    omit?: MarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkerInclude<ExtArgs> | null
    /**
     * Filter, which Markers to fetch.
     */
    where?: MarkerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markers to fetch.
     */
    orderBy?: MarkerOrderByWithRelationInput | MarkerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Markers.
     */
    cursor?: MarkerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markers.
     */
    skip?: number
    distinct?: MarkerScalarFieldEnum | MarkerScalarFieldEnum[]
  }

  /**
   * Marker create
   */
  export type MarkerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marker
     */
    select?: MarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marker
     */
    omit?: MarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkerInclude<ExtArgs> | null
    /**
     * The data needed to create a Marker.
     */
    data: XOR<MarkerCreateInput, MarkerUncheckedCreateInput>
  }

  /**
   * Marker createMany
   */
  export type MarkerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Markers.
     */
    data: MarkerCreateManyInput | MarkerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Marker createManyAndReturn
   */
  export type MarkerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marker
     */
    select?: MarkerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marker
     */
    omit?: MarkerOmit<ExtArgs> | null
    /**
     * The data used to create many Markers.
     */
    data: MarkerCreateManyInput | MarkerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Marker update
   */
  export type MarkerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marker
     */
    select?: MarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marker
     */
    omit?: MarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkerInclude<ExtArgs> | null
    /**
     * The data needed to update a Marker.
     */
    data: XOR<MarkerUpdateInput, MarkerUncheckedUpdateInput>
    /**
     * Choose, which Marker to update.
     */
    where: MarkerWhereUniqueInput
  }

  /**
   * Marker updateMany
   */
  export type MarkerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Markers.
     */
    data: XOR<MarkerUpdateManyMutationInput, MarkerUncheckedUpdateManyInput>
    /**
     * Filter which Markers to update
     */
    where?: MarkerWhereInput
    /**
     * Limit how many Markers to update.
     */
    limit?: number
  }

  /**
   * Marker updateManyAndReturn
   */
  export type MarkerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marker
     */
    select?: MarkerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Marker
     */
    omit?: MarkerOmit<ExtArgs> | null
    /**
     * The data used to update Markers.
     */
    data: XOR<MarkerUpdateManyMutationInput, MarkerUncheckedUpdateManyInput>
    /**
     * Filter which Markers to update
     */
    where?: MarkerWhereInput
    /**
     * Limit how many Markers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Marker upsert
   */
  export type MarkerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marker
     */
    select?: MarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marker
     */
    omit?: MarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkerInclude<ExtArgs> | null
    /**
     * The filter to search for the Marker to update in case it exists.
     */
    where: MarkerWhereUniqueInput
    /**
     * In case the Marker found by the `where` argument doesn't exist, create a new Marker with this data.
     */
    create: XOR<MarkerCreateInput, MarkerUncheckedCreateInput>
    /**
     * In case the Marker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarkerUpdateInput, MarkerUncheckedUpdateInput>
  }

  /**
   * Marker delete
   */
  export type MarkerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marker
     */
    select?: MarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marker
     */
    omit?: MarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkerInclude<ExtArgs> | null
    /**
     * Filter which Marker to delete.
     */
    where: MarkerWhereUniqueInput
  }

  /**
   * Marker deleteMany
   */
  export type MarkerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Markers to delete
     */
    where?: MarkerWhereInput
    /**
     * Limit how many Markers to delete.
     */
    limit?: number
  }

  /**
   * Marker.event
   */
  export type Marker$eventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * Marker.User
   */
  export type Marker$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Marker without action
   */
  export type MarkerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marker
     */
    select?: MarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marker
     */
    omit?: MarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkerInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    email: string | null
    imageUrl: string | null
    bio: string | null
    phone: string | null
    location: string | null
    birthdate: Date | null
    gender: string | null
    website: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    linkedin: string | null
    isPublic: boolean | null
    lastActiveAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    email: string | null
    imageUrl: string | null
    bio: string | null
    phone: string | null
    location: string | null
    birthdate: Date | null
    gender: string | null
    website: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    linkedin: string | null
    isPublic: boolean | null
    lastActiveAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    email: number
    imageUrl: number
    bio: number
    phone: number
    location: number
    birthdate: number
    gender: number
    website: number
    facebook: number
    instagram: number
    twitter: number
    linkedin: number
    interests: number
    languages: number
    isPublic: number
    lastActiveAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    imageUrl?: true
    bio?: true
    phone?: true
    location?: true
    birthdate?: true
    gender?: true
    website?: true
    facebook?: true
    instagram?: true
    twitter?: true
    linkedin?: true
    isPublic?: true
    lastActiveAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    imageUrl?: true
    bio?: true
    phone?: true
    location?: true
    birthdate?: true
    gender?: true
    website?: true
    facebook?: true
    instagram?: true
    twitter?: true
    linkedin?: true
    isPublic?: true
    lastActiveAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    imageUrl?: true
    bio?: true
    phone?: true
    location?: true
    birthdate?: true
    gender?: true
    website?: true
    facebook?: true
    instagram?: true
    twitter?: true
    linkedin?: true
    interests?: true
    languages?: true
    isPublic?: true
    lastActiveAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userId: string
    name: string | null
    email: string
    imageUrl: string | null
    bio: string | null
    phone: string | null
    location: string | null
    birthdate: Date | null
    gender: string | null
    website: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    linkedin: string | null
    interests: string[]
    languages: string[]
    isPublic: boolean
    lastActiveAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    imageUrl?: boolean
    bio?: boolean
    phone?: boolean
    location?: boolean
    birthdate?: boolean
    gender?: boolean
    website?: boolean
    facebook?: boolean
    instagram?: boolean
    twitter?: boolean
    linkedin?: boolean
    interests?: boolean
    languages?: boolean
    isPublic?: boolean
    lastActiveAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    events?: boolean | User$eventsArgs<ExtArgs>
    signups?: boolean | User$signupsArgs<ExtArgs>
    roles?: boolean | User$rolesArgs<ExtArgs>
    markers?: boolean | User$markersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    imageUrl?: boolean
    bio?: boolean
    phone?: boolean
    location?: boolean
    birthdate?: boolean
    gender?: boolean
    website?: boolean
    facebook?: boolean
    instagram?: boolean
    twitter?: boolean
    linkedin?: boolean
    interests?: boolean
    languages?: boolean
    isPublic?: boolean
    lastActiveAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    imageUrl?: boolean
    bio?: boolean
    phone?: boolean
    location?: boolean
    birthdate?: boolean
    gender?: boolean
    website?: boolean
    facebook?: boolean
    instagram?: boolean
    twitter?: boolean
    linkedin?: boolean
    interests?: boolean
    languages?: boolean
    isPublic?: boolean
    lastActiveAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    imageUrl?: boolean
    bio?: boolean
    phone?: boolean
    location?: boolean
    birthdate?: boolean
    gender?: boolean
    website?: boolean
    facebook?: boolean
    instagram?: boolean
    twitter?: boolean
    linkedin?: boolean
    interests?: boolean
    languages?: boolean
    isPublic?: boolean
    lastActiveAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "email" | "imageUrl" | "bio" | "phone" | "location" | "birthdate" | "gender" | "website" | "facebook" | "instagram" | "twitter" | "linkedin" | "interests" | "languages" | "isPublic" | "lastActiveAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | User$eventsArgs<ExtArgs>
    signups?: boolean | User$signupsArgs<ExtArgs>
    roles?: boolean | User$rolesArgs<ExtArgs>
    markers?: boolean | User$markersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      signups: Prisma.$SignupPayload<ExtArgs>[]
      roles: Prisma.$RolePayload<ExtArgs>[]
      markers: Prisma.$MarkerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string | null
      email: string
      imageUrl: string | null
      bio: string | null
      phone: string | null
      location: string | null
      birthdate: Date | null
      gender: string | null
      website: string | null
      facebook: string | null
      instagram: string | null
      twitter: string | null
      linkedin: string | null
      interests: string[]
      languages: string[]
      isPublic: boolean
      lastActiveAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    signups<T extends User$signupsArgs<ExtArgs> = {}>(args?: Subset<T, User$signupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    markers<T extends User$markersArgs<ExtArgs> = {}>(args?: Subset<T, User$markersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly userId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly location: FieldRef<"User", 'String'>
    readonly birthdate: FieldRef<"User", 'DateTime'>
    readonly gender: FieldRef<"User", 'String'>
    readonly website: FieldRef<"User", 'String'>
    readonly facebook: FieldRef<"User", 'String'>
    readonly instagram: FieldRef<"User", 'String'>
    readonly twitter: FieldRef<"User", 'String'>
    readonly linkedin: FieldRef<"User", 'String'>
    readonly interests: FieldRef<"User", 'String[]'>
    readonly languages: FieldRef<"User", 'String[]'>
    readonly isPublic: FieldRef<"User", 'Boolean'>
    readonly lastActiveAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.signups
   */
  export type User$signupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignupInclude<ExtArgs> | null
    where?: SignupWhereInput
    orderBy?: SignupOrderByWithRelationInput | SignupOrderByWithRelationInput[]
    cursor?: SignupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignupScalarFieldEnum | SignupScalarFieldEnum[]
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * User.markers
   */
  export type User$markersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marker
     */
    select?: MarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marker
     */
    omit?: MarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkerInclude<ExtArgs> | null
    where?: MarkerWhereInput
    orderBy?: MarkerOrderByWithRelationInput | MarkerOrderByWithRelationInput[]
    cursor?: MarkerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarkerScalarFieldEnum | MarkerScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type EventSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: string | null
    date: Date | null
    location: string | null
    latitude: number | null
    longitude: number | null
    image: string | null
    createdAt: Date | null
    organizerId: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    type: string | null
    date: Date | null
    location: string | null
    latitude: number | null
    longitude: number | null
    image: string | null
    createdAt: Date | null
    organizerId: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    date: number
    location: number
    latitude: number
    longitude: number
    image: number
    createdAt: number
    organizerId: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type EventSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    date?: true
    location?: true
    latitude?: true
    longitude?: true
    image?: true
    createdAt?: true
    organizerId?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    date?: true
    location?: true
    latitude?: true
    longitude?: true
    image?: true
    createdAt?: true
    organizerId?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    date?: true
    location?: true
    latitude?: true
    longitude?: true
    image?: true
    createdAt?: true
    organizerId?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    description: string | null
    type: string
    date: Date
    location: string
    latitude: number | null
    longitude: number | null
    image: string | null
    createdAt: Date
    organizerId: string
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    date?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    image?: boolean
    createdAt?: boolean
    organizerId?: boolean
    targetGroups?: boolean | Event$targetGroupsArgs<ExtArgs>
    signups?: boolean | Event$signupsArgs<ExtArgs>
    roles?: boolean | Event$rolesArgs<ExtArgs>
    Marker?: boolean | Event$MarkerArgs<ExtArgs>
    User?: boolean | Event$UserArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    date?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    image?: boolean
    createdAt?: boolean
    organizerId?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    date?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    image?: boolean
    createdAt?: boolean
    organizerId?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    date?: boolean
    location?: boolean
    latitude?: boolean
    longitude?: boolean
    image?: boolean
    createdAt?: boolean
    organizerId?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "date" | "location" | "latitude" | "longitude" | "image" | "createdAt" | "organizerId", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targetGroups?: boolean | Event$targetGroupsArgs<ExtArgs>
    signups?: boolean | Event$signupsArgs<ExtArgs>
    roles?: boolean | Event$rolesArgs<ExtArgs>
    Marker?: boolean | Event$MarkerArgs<ExtArgs>
    User?: boolean | Event$UserArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      targetGroups: Prisma.$EventTargetGroupsPayload<ExtArgs>[]
      signups: Prisma.$SignupPayload<ExtArgs>[]
      roles: Prisma.$RolePayload<ExtArgs>[]
      Marker: Prisma.$MarkerPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string | null
      type: string
      date: Date
      location: string
      latitude: number | null
      longitude: number | null
      image: string | null
      createdAt: Date
      organizerId: string
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    targetGroups<T extends Event$targetGroupsArgs<ExtArgs> = {}>(args?: Subset<T, Event$targetGroupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTargetGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    signups<T extends Event$signupsArgs<ExtArgs> = {}>(args?: Subset<T, Event$signupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends Event$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Event$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Marker<T extends Event$MarkerArgs<ExtArgs> = {}>(args?: Subset<T, Event$MarkerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Event$UserArgs<ExtArgs> = {}>(args?: Subset<T, Event$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly type: FieldRef<"Event", 'String'>
    readonly date: FieldRef<"Event", 'DateTime'>
    readonly location: FieldRef<"Event", 'String'>
    readonly latitude: FieldRef<"Event", 'Float'>
    readonly longitude: FieldRef<"Event", 'Float'>
    readonly image: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly organizerId: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.targetGroups
   */
  export type Event$targetGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTargetGroups
     */
    select?: EventTargetGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTargetGroups
     */
    omit?: EventTargetGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTargetGroupsInclude<ExtArgs> | null
    where?: EventTargetGroupsWhereInput
    orderBy?: EventTargetGroupsOrderByWithRelationInput | EventTargetGroupsOrderByWithRelationInput[]
    cursor?: EventTargetGroupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventTargetGroupsScalarFieldEnum | EventTargetGroupsScalarFieldEnum[]
  }

  /**
   * Event.signups
   */
  export type Event$signupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignupInclude<ExtArgs> | null
    where?: SignupWhereInput
    orderBy?: SignupOrderByWithRelationInput | SignupOrderByWithRelationInput[]
    cursor?: SignupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignupScalarFieldEnum | SignupScalarFieldEnum[]
  }

  /**
   * Event.roles
   */
  export type Event$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Event.Marker
   */
  export type Event$MarkerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marker
     */
    select?: MarkerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Marker
     */
    omit?: MarkerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkerInclude<ExtArgs> | null
    where?: MarkerWhereInput
    orderBy?: MarkerOrderByWithRelationInput | MarkerOrderByWithRelationInput[]
    cursor?: MarkerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarkerScalarFieldEnum | MarkerScalarFieldEnum[]
  }

  /**
   * Event.User
   */
  export type Event$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model TargetGroup
   */

  export type AggregateTargetGroup = {
    _count: TargetGroupCountAggregateOutputType | null
    _min: TargetGroupMinAggregateOutputType | null
    _max: TargetGroupMaxAggregateOutputType | null
  }

  export type TargetGroupMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TargetGroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TargetGroupCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TargetGroupMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TargetGroupMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TargetGroupCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TargetGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TargetGroup to aggregate.
     */
    where?: TargetGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetGroups to fetch.
     */
    orderBy?: TargetGroupOrderByWithRelationInput | TargetGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TargetGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TargetGroups
    **/
    _count?: true | TargetGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TargetGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TargetGroupMaxAggregateInputType
  }

  export type GetTargetGroupAggregateType<T extends TargetGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateTargetGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTargetGroup[P]>
      : GetScalarType<T[P], AggregateTargetGroup[P]>
  }




  export type TargetGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TargetGroupWhereInput
    orderBy?: TargetGroupOrderByWithAggregationInput | TargetGroupOrderByWithAggregationInput[]
    by: TargetGroupScalarFieldEnum[] | TargetGroupScalarFieldEnum
    having?: TargetGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TargetGroupCountAggregateInputType | true
    _min?: TargetGroupMinAggregateInputType
    _max?: TargetGroupMaxAggregateInputType
  }

  export type TargetGroupGroupByOutputType = {
    id: string
    name: string
    _count: TargetGroupCountAggregateOutputType | null
    _min: TargetGroupMinAggregateOutputType | null
    _max: TargetGroupMaxAggregateOutputType | null
  }

  type GetTargetGroupGroupByPayload<T extends TargetGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TargetGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TargetGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TargetGroupGroupByOutputType[P]>
            : GetScalarType<T[P], TargetGroupGroupByOutputType[P]>
        }
      >
    >


  export type TargetGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    events?: boolean | TargetGroup$eventsArgs<ExtArgs>
    _count?: boolean | TargetGroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targetGroup"]>

  export type TargetGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["targetGroup"]>

  export type TargetGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["targetGroup"]>

  export type TargetGroupSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TargetGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["targetGroup"]>
  export type TargetGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | TargetGroup$eventsArgs<ExtArgs>
    _count?: boolean | TargetGroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TargetGroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TargetGroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TargetGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TargetGroup"
    objects: {
      events: Prisma.$EventTargetGroupsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["targetGroup"]>
    composites: {}
  }

  type TargetGroupGetPayload<S extends boolean | null | undefined | TargetGroupDefaultArgs> = $Result.GetResult<Prisma.$TargetGroupPayload, S>

  type TargetGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TargetGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TargetGroupCountAggregateInputType | true
    }

  export interface TargetGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TargetGroup'], meta: { name: 'TargetGroup' } }
    /**
     * Find zero or one TargetGroup that matches the filter.
     * @param {TargetGroupFindUniqueArgs} args - Arguments to find a TargetGroup
     * @example
     * // Get one TargetGroup
     * const targetGroup = await prisma.targetGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TargetGroupFindUniqueArgs>(args: SelectSubset<T, TargetGroupFindUniqueArgs<ExtArgs>>): Prisma__TargetGroupClient<$Result.GetResult<Prisma.$TargetGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TargetGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TargetGroupFindUniqueOrThrowArgs} args - Arguments to find a TargetGroup
     * @example
     * // Get one TargetGroup
     * const targetGroup = await prisma.targetGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TargetGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, TargetGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TargetGroupClient<$Result.GetResult<Prisma.$TargetGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TargetGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetGroupFindFirstArgs} args - Arguments to find a TargetGroup
     * @example
     * // Get one TargetGroup
     * const targetGroup = await prisma.targetGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TargetGroupFindFirstArgs>(args?: SelectSubset<T, TargetGroupFindFirstArgs<ExtArgs>>): Prisma__TargetGroupClient<$Result.GetResult<Prisma.$TargetGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TargetGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetGroupFindFirstOrThrowArgs} args - Arguments to find a TargetGroup
     * @example
     * // Get one TargetGroup
     * const targetGroup = await prisma.targetGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TargetGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, TargetGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__TargetGroupClient<$Result.GetResult<Prisma.$TargetGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TargetGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TargetGroups
     * const targetGroups = await prisma.targetGroup.findMany()
     * 
     * // Get first 10 TargetGroups
     * const targetGroups = await prisma.targetGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const targetGroupWithIdOnly = await prisma.targetGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TargetGroupFindManyArgs>(args?: SelectSubset<T, TargetGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TargetGroup.
     * @param {TargetGroupCreateArgs} args - Arguments to create a TargetGroup.
     * @example
     * // Create one TargetGroup
     * const TargetGroup = await prisma.targetGroup.create({
     *   data: {
     *     // ... data to create a TargetGroup
     *   }
     * })
     * 
     */
    create<T extends TargetGroupCreateArgs>(args: SelectSubset<T, TargetGroupCreateArgs<ExtArgs>>): Prisma__TargetGroupClient<$Result.GetResult<Prisma.$TargetGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TargetGroups.
     * @param {TargetGroupCreateManyArgs} args - Arguments to create many TargetGroups.
     * @example
     * // Create many TargetGroups
     * const targetGroup = await prisma.targetGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TargetGroupCreateManyArgs>(args?: SelectSubset<T, TargetGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TargetGroups and returns the data saved in the database.
     * @param {TargetGroupCreateManyAndReturnArgs} args - Arguments to create many TargetGroups.
     * @example
     * // Create many TargetGroups
     * const targetGroup = await prisma.targetGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TargetGroups and only return the `id`
     * const targetGroupWithIdOnly = await prisma.targetGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TargetGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, TargetGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TargetGroup.
     * @param {TargetGroupDeleteArgs} args - Arguments to delete one TargetGroup.
     * @example
     * // Delete one TargetGroup
     * const TargetGroup = await prisma.targetGroup.delete({
     *   where: {
     *     // ... filter to delete one TargetGroup
     *   }
     * })
     * 
     */
    delete<T extends TargetGroupDeleteArgs>(args: SelectSubset<T, TargetGroupDeleteArgs<ExtArgs>>): Prisma__TargetGroupClient<$Result.GetResult<Prisma.$TargetGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TargetGroup.
     * @param {TargetGroupUpdateArgs} args - Arguments to update one TargetGroup.
     * @example
     * // Update one TargetGroup
     * const targetGroup = await prisma.targetGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TargetGroupUpdateArgs>(args: SelectSubset<T, TargetGroupUpdateArgs<ExtArgs>>): Prisma__TargetGroupClient<$Result.GetResult<Prisma.$TargetGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TargetGroups.
     * @param {TargetGroupDeleteManyArgs} args - Arguments to filter TargetGroups to delete.
     * @example
     * // Delete a few TargetGroups
     * const { count } = await prisma.targetGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TargetGroupDeleteManyArgs>(args?: SelectSubset<T, TargetGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TargetGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TargetGroups
     * const targetGroup = await prisma.targetGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TargetGroupUpdateManyArgs>(args: SelectSubset<T, TargetGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TargetGroups and returns the data updated in the database.
     * @param {TargetGroupUpdateManyAndReturnArgs} args - Arguments to update many TargetGroups.
     * @example
     * // Update many TargetGroups
     * const targetGroup = await prisma.targetGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TargetGroups and only return the `id`
     * const targetGroupWithIdOnly = await prisma.targetGroup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TargetGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, TargetGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TargetGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TargetGroup.
     * @param {TargetGroupUpsertArgs} args - Arguments to update or create a TargetGroup.
     * @example
     * // Update or create a TargetGroup
     * const targetGroup = await prisma.targetGroup.upsert({
     *   create: {
     *     // ... data to create a TargetGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TargetGroup we want to update
     *   }
     * })
     */
    upsert<T extends TargetGroupUpsertArgs>(args: SelectSubset<T, TargetGroupUpsertArgs<ExtArgs>>): Prisma__TargetGroupClient<$Result.GetResult<Prisma.$TargetGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TargetGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetGroupCountArgs} args - Arguments to filter TargetGroups to count.
     * @example
     * // Count the number of TargetGroups
     * const count = await prisma.targetGroup.count({
     *   where: {
     *     // ... the filter for the TargetGroups we want to count
     *   }
     * })
    **/
    count<T extends TargetGroupCountArgs>(
      args?: Subset<T, TargetGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TargetGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TargetGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TargetGroupAggregateArgs>(args: Subset<T, TargetGroupAggregateArgs>): Prisma.PrismaPromise<GetTargetGroupAggregateType<T>>

    /**
     * Group by TargetGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TargetGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TargetGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TargetGroupGroupByArgs['orderBy'] }
        : { orderBy?: TargetGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TargetGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTargetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TargetGroup model
   */
  readonly fields: TargetGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TargetGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TargetGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends TargetGroup$eventsArgs<ExtArgs> = {}>(args?: Subset<T, TargetGroup$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTargetGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TargetGroup model
   */
  interface TargetGroupFieldRefs {
    readonly id: FieldRef<"TargetGroup", 'String'>
    readonly name: FieldRef<"TargetGroup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TargetGroup findUnique
   */
  export type TargetGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetGroup
     */
    select?: TargetGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetGroup
     */
    omit?: TargetGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetGroupInclude<ExtArgs> | null
    /**
     * Filter, which TargetGroup to fetch.
     */
    where: TargetGroupWhereUniqueInput
  }

  /**
   * TargetGroup findUniqueOrThrow
   */
  export type TargetGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetGroup
     */
    select?: TargetGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetGroup
     */
    omit?: TargetGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetGroupInclude<ExtArgs> | null
    /**
     * Filter, which TargetGroup to fetch.
     */
    where: TargetGroupWhereUniqueInput
  }

  /**
   * TargetGroup findFirst
   */
  export type TargetGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetGroup
     */
    select?: TargetGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetGroup
     */
    omit?: TargetGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetGroupInclude<ExtArgs> | null
    /**
     * Filter, which TargetGroup to fetch.
     */
    where?: TargetGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetGroups to fetch.
     */
    orderBy?: TargetGroupOrderByWithRelationInput | TargetGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TargetGroups.
     */
    cursor?: TargetGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TargetGroups.
     */
    distinct?: TargetGroupScalarFieldEnum | TargetGroupScalarFieldEnum[]
  }

  /**
   * TargetGroup findFirstOrThrow
   */
  export type TargetGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetGroup
     */
    select?: TargetGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetGroup
     */
    omit?: TargetGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetGroupInclude<ExtArgs> | null
    /**
     * Filter, which TargetGroup to fetch.
     */
    where?: TargetGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetGroups to fetch.
     */
    orderBy?: TargetGroupOrderByWithRelationInput | TargetGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TargetGroups.
     */
    cursor?: TargetGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TargetGroups.
     */
    distinct?: TargetGroupScalarFieldEnum | TargetGroupScalarFieldEnum[]
  }

  /**
   * TargetGroup findMany
   */
  export type TargetGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetGroup
     */
    select?: TargetGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetGroup
     */
    omit?: TargetGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetGroupInclude<ExtArgs> | null
    /**
     * Filter, which TargetGroups to fetch.
     */
    where?: TargetGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TargetGroups to fetch.
     */
    orderBy?: TargetGroupOrderByWithRelationInput | TargetGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TargetGroups.
     */
    cursor?: TargetGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TargetGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TargetGroups.
     */
    skip?: number
    distinct?: TargetGroupScalarFieldEnum | TargetGroupScalarFieldEnum[]
  }

  /**
   * TargetGroup create
   */
  export type TargetGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetGroup
     */
    select?: TargetGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetGroup
     */
    omit?: TargetGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a TargetGroup.
     */
    data: XOR<TargetGroupCreateInput, TargetGroupUncheckedCreateInput>
  }

  /**
   * TargetGroup createMany
   */
  export type TargetGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TargetGroups.
     */
    data: TargetGroupCreateManyInput | TargetGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TargetGroup createManyAndReturn
   */
  export type TargetGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetGroup
     */
    select?: TargetGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TargetGroup
     */
    omit?: TargetGroupOmit<ExtArgs> | null
    /**
     * The data used to create many TargetGroups.
     */
    data: TargetGroupCreateManyInput | TargetGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TargetGroup update
   */
  export type TargetGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetGroup
     */
    select?: TargetGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetGroup
     */
    omit?: TargetGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a TargetGroup.
     */
    data: XOR<TargetGroupUpdateInput, TargetGroupUncheckedUpdateInput>
    /**
     * Choose, which TargetGroup to update.
     */
    where: TargetGroupWhereUniqueInput
  }

  /**
   * TargetGroup updateMany
   */
  export type TargetGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TargetGroups.
     */
    data: XOR<TargetGroupUpdateManyMutationInput, TargetGroupUncheckedUpdateManyInput>
    /**
     * Filter which TargetGroups to update
     */
    where?: TargetGroupWhereInput
    /**
     * Limit how many TargetGroups to update.
     */
    limit?: number
  }

  /**
   * TargetGroup updateManyAndReturn
   */
  export type TargetGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetGroup
     */
    select?: TargetGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TargetGroup
     */
    omit?: TargetGroupOmit<ExtArgs> | null
    /**
     * The data used to update TargetGroups.
     */
    data: XOR<TargetGroupUpdateManyMutationInput, TargetGroupUncheckedUpdateManyInput>
    /**
     * Filter which TargetGroups to update
     */
    where?: TargetGroupWhereInput
    /**
     * Limit how many TargetGroups to update.
     */
    limit?: number
  }

  /**
   * TargetGroup upsert
   */
  export type TargetGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetGroup
     */
    select?: TargetGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetGroup
     */
    omit?: TargetGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the TargetGroup to update in case it exists.
     */
    where: TargetGroupWhereUniqueInput
    /**
     * In case the TargetGroup found by the `where` argument doesn't exist, create a new TargetGroup with this data.
     */
    create: XOR<TargetGroupCreateInput, TargetGroupUncheckedCreateInput>
    /**
     * In case the TargetGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TargetGroupUpdateInput, TargetGroupUncheckedUpdateInput>
  }

  /**
   * TargetGroup delete
   */
  export type TargetGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetGroup
     */
    select?: TargetGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetGroup
     */
    omit?: TargetGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetGroupInclude<ExtArgs> | null
    /**
     * Filter which TargetGroup to delete.
     */
    where: TargetGroupWhereUniqueInput
  }

  /**
   * TargetGroup deleteMany
   */
  export type TargetGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TargetGroups to delete
     */
    where?: TargetGroupWhereInput
    /**
     * Limit how many TargetGroups to delete.
     */
    limit?: number
  }

  /**
   * TargetGroup.events
   */
  export type TargetGroup$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTargetGroups
     */
    select?: EventTargetGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTargetGroups
     */
    omit?: EventTargetGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTargetGroupsInclude<ExtArgs> | null
    where?: EventTargetGroupsWhereInput
    orderBy?: EventTargetGroupsOrderByWithRelationInput | EventTargetGroupsOrderByWithRelationInput[]
    cursor?: EventTargetGroupsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventTargetGroupsScalarFieldEnum | EventTargetGroupsScalarFieldEnum[]
  }

  /**
   * TargetGroup without action
   */
  export type TargetGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TargetGroup
     */
    select?: TargetGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TargetGroup
     */
    omit?: TargetGroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TargetGroupInclude<ExtArgs> | null
  }


  /**
   * Model EventTargetGroups
   */

  export type AggregateEventTargetGroups = {
    _count: EventTargetGroupsCountAggregateOutputType | null
    _min: EventTargetGroupsMinAggregateOutputType | null
    _max: EventTargetGroupsMaxAggregateOutputType | null
  }

  export type EventTargetGroupsMinAggregateOutputType = {
    eventId: string | null
    targetGroupId: string | null
  }

  export type EventTargetGroupsMaxAggregateOutputType = {
    eventId: string | null
    targetGroupId: string | null
  }

  export type EventTargetGroupsCountAggregateOutputType = {
    eventId: number
    targetGroupId: number
    _all: number
  }


  export type EventTargetGroupsMinAggregateInputType = {
    eventId?: true
    targetGroupId?: true
  }

  export type EventTargetGroupsMaxAggregateInputType = {
    eventId?: true
    targetGroupId?: true
  }

  export type EventTargetGroupsCountAggregateInputType = {
    eventId?: true
    targetGroupId?: true
    _all?: true
  }

  export type EventTargetGroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTargetGroups to aggregate.
     */
    where?: EventTargetGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTargetGroups to fetch.
     */
    orderBy?: EventTargetGroupsOrderByWithRelationInput | EventTargetGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventTargetGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTargetGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTargetGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventTargetGroups
    **/
    _count?: true | EventTargetGroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventTargetGroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventTargetGroupsMaxAggregateInputType
  }

  export type GetEventTargetGroupsAggregateType<T extends EventTargetGroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateEventTargetGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventTargetGroups[P]>
      : GetScalarType<T[P], AggregateEventTargetGroups[P]>
  }




  export type EventTargetGroupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTargetGroupsWhereInput
    orderBy?: EventTargetGroupsOrderByWithAggregationInput | EventTargetGroupsOrderByWithAggregationInput[]
    by: EventTargetGroupsScalarFieldEnum[] | EventTargetGroupsScalarFieldEnum
    having?: EventTargetGroupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventTargetGroupsCountAggregateInputType | true
    _min?: EventTargetGroupsMinAggregateInputType
    _max?: EventTargetGroupsMaxAggregateInputType
  }

  export type EventTargetGroupsGroupByOutputType = {
    eventId: string
    targetGroupId: string
    _count: EventTargetGroupsCountAggregateOutputType | null
    _min: EventTargetGroupsMinAggregateOutputType | null
    _max: EventTargetGroupsMaxAggregateOutputType | null
  }

  type GetEventTargetGroupsGroupByPayload<T extends EventTargetGroupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventTargetGroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventTargetGroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventTargetGroupsGroupByOutputType[P]>
            : GetScalarType<T[P], EventTargetGroupsGroupByOutputType[P]>
        }
      >
    >


  export type EventTargetGroupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    targetGroupId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    targetGroup?: boolean | TargetGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventTargetGroups"]>

  export type EventTargetGroupsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    targetGroupId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    targetGroup?: boolean | TargetGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventTargetGroups"]>

  export type EventTargetGroupsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    eventId?: boolean
    targetGroupId?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    targetGroup?: boolean | TargetGroupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventTargetGroups"]>

  export type EventTargetGroupsSelectScalar = {
    eventId?: boolean
    targetGroupId?: boolean
  }

  export type EventTargetGroupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"eventId" | "targetGroupId", ExtArgs["result"]["eventTargetGroups"]>
  export type EventTargetGroupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    targetGroup?: boolean | TargetGroupDefaultArgs<ExtArgs>
  }
  export type EventTargetGroupsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    targetGroup?: boolean | TargetGroupDefaultArgs<ExtArgs>
  }
  export type EventTargetGroupsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    targetGroup?: boolean | TargetGroupDefaultArgs<ExtArgs>
  }

  export type $EventTargetGroupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventTargetGroups"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      targetGroup: Prisma.$TargetGroupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      eventId: string
      targetGroupId: string
    }, ExtArgs["result"]["eventTargetGroups"]>
    composites: {}
  }

  type EventTargetGroupsGetPayload<S extends boolean | null | undefined | EventTargetGroupsDefaultArgs> = $Result.GetResult<Prisma.$EventTargetGroupsPayload, S>

  type EventTargetGroupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventTargetGroupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventTargetGroupsCountAggregateInputType | true
    }

  export interface EventTargetGroupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventTargetGroups'], meta: { name: 'EventTargetGroups' } }
    /**
     * Find zero or one EventTargetGroups that matches the filter.
     * @param {EventTargetGroupsFindUniqueArgs} args - Arguments to find a EventTargetGroups
     * @example
     * // Get one EventTargetGroups
     * const eventTargetGroups = await prisma.eventTargetGroups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventTargetGroupsFindUniqueArgs>(args: SelectSubset<T, EventTargetGroupsFindUniqueArgs<ExtArgs>>): Prisma__EventTargetGroupsClient<$Result.GetResult<Prisma.$EventTargetGroupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventTargetGroups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventTargetGroupsFindUniqueOrThrowArgs} args - Arguments to find a EventTargetGroups
     * @example
     * // Get one EventTargetGroups
     * const eventTargetGroups = await prisma.eventTargetGroups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventTargetGroupsFindUniqueOrThrowArgs>(args: SelectSubset<T, EventTargetGroupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventTargetGroupsClient<$Result.GetResult<Prisma.$EventTargetGroupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventTargetGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTargetGroupsFindFirstArgs} args - Arguments to find a EventTargetGroups
     * @example
     * // Get one EventTargetGroups
     * const eventTargetGroups = await prisma.eventTargetGroups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventTargetGroupsFindFirstArgs>(args?: SelectSubset<T, EventTargetGroupsFindFirstArgs<ExtArgs>>): Prisma__EventTargetGroupsClient<$Result.GetResult<Prisma.$EventTargetGroupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventTargetGroups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTargetGroupsFindFirstOrThrowArgs} args - Arguments to find a EventTargetGroups
     * @example
     * // Get one EventTargetGroups
     * const eventTargetGroups = await prisma.eventTargetGroups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventTargetGroupsFindFirstOrThrowArgs>(args?: SelectSubset<T, EventTargetGroupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventTargetGroupsClient<$Result.GetResult<Prisma.$EventTargetGroupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventTargetGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTargetGroupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTargetGroups
     * const eventTargetGroups = await prisma.eventTargetGroups.findMany()
     * 
     * // Get first 10 EventTargetGroups
     * const eventTargetGroups = await prisma.eventTargetGroups.findMany({ take: 10 })
     * 
     * // Only select the `eventId`
     * const eventTargetGroupsWithEventIdOnly = await prisma.eventTargetGroups.findMany({ select: { eventId: true } })
     * 
     */
    findMany<T extends EventTargetGroupsFindManyArgs>(args?: SelectSubset<T, EventTargetGroupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTargetGroupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventTargetGroups.
     * @param {EventTargetGroupsCreateArgs} args - Arguments to create a EventTargetGroups.
     * @example
     * // Create one EventTargetGroups
     * const EventTargetGroups = await prisma.eventTargetGroups.create({
     *   data: {
     *     // ... data to create a EventTargetGroups
     *   }
     * })
     * 
     */
    create<T extends EventTargetGroupsCreateArgs>(args: SelectSubset<T, EventTargetGroupsCreateArgs<ExtArgs>>): Prisma__EventTargetGroupsClient<$Result.GetResult<Prisma.$EventTargetGroupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventTargetGroups.
     * @param {EventTargetGroupsCreateManyArgs} args - Arguments to create many EventTargetGroups.
     * @example
     * // Create many EventTargetGroups
     * const eventTargetGroups = await prisma.eventTargetGroups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventTargetGroupsCreateManyArgs>(args?: SelectSubset<T, EventTargetGroupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventTargetGroups and returns the data saved in the database.
     * @param {EventTargetGroupsCreateManyAndReturnArgs} args - Arguments to create many EventTargetGroups.
     * @example
     * // Create many EventTargetGroups
     * const eventTargetGroups = await prisma.eventTargetGroups.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventTargetGroups and only return the `eventId`
     * const eventTargetGroupsWithEventIdOnly = await prisma.eventTargetGroups.createManyAndReturn({
     *   select: { eventId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventTargetGroupsCreateManyAndReturnArgs>(args?: SelectSubset<T, EventTargetGroupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTargetGroupsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventTargetGroups.
     * @param {EventTargetGroupsDeleteArgs} args - Arguments to delete one EventTargetGroups.
     * @example
     * // Delete one EventTargetGroups
     * const EventTargetGroups = await prisma.eventTargetGroups.delete({
     *   where: {
     *     // ... filter to delete one EventTargetGroups
     *   }
     * })
     * 
     */
    delete<T extends EventTargetGroupsDeleteArgs>(args: SelectSubset<T, EventTargetGroupsDeleteArgs<ExtArgs>>): Prisma__EventTargetGroupsClient<$Result.GetResult<Prisma.$EventTargetGroupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventTargetGroups.
     * @param {EventTargetGroupsUpdateArgs} args - Arguments to update one EventTargetGroups.
     * @example
     * // Update one EventTargetGroups
     * const eventTargetGroups = await prisma.eventTargetGroups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventTargetGroupsUpdateArgs>(args: SelectSubset<T, EventTargetGroupsUpdateArgs<ExtArgs>>): Prisma__EventTargetGroupsClient<$Result.GetResult<Prisma.$EventTargetGroupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventTargetGroups.
     * @param {EventTargetGroupsDeleteManyArgs} args - Arguments to filter EventTargetGroups to delete.
     * @example
     * // Delete a few EventTargetGroups
     * const { count } = await prisma.eventTargetGroups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventTargetGroupsDeleteManyArgs>(args?: SelectSubset<T, EventTargetGroupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTargetGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTargetGroupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTargetGroups
     * const eventTargetGroups = await prisma.eventTargetGroups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventTargetGroupsUpdateManyArgs>(args: SelectSubset<T, EventTargetGroupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTargetGroups and returns the data updated in the database.
     * @param {EventTargetGroupsUpdateManyAndReturnArgs} args - Arguments to update many EventTargetGroups.
     * @example
     * // Update many EventTargetGroups
     * const eventTargetGroups = await prisma.eventTargetGroups.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventTargetGroups and only return the `eventId`
     * const eventTargetGroupsWithEventIdOnly = await prisma.eventTargetGroups.updateManyAndReturn({
     *   select: { eventId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventTargetGroupsUpdateManyAndReturnArgs>(args: SelectSubset<T, EventTargetGroupsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTargetGroupsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventTargetGroups.
     * @param {EventTargetGroupsUpsertArgs} args - Arguments to update or create a EventTargetGroups.
     * @example
     * // Update or create a EventTargetGroups
     * const eventTargetGroups = await prisma.eventTargetGroups.upsert({
     *   create: {
     *     // ... data to create a EventTargetGroups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventTargetGroups we want to update
     *   }
     * })
     */
    upsert<T extends EventTargetGroupsUpsertArgs>(args: SelectSubset<T, EventTargetGroupsUpsertArgs<ExtArgs>>): Prisma__EventTargetGroupsClient<$Result.GetResult<Prisma.$EventTargetGroupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventTargetGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTargetGroupsCountArgs} args - Arguments to filter EventTargetGroups to count.
     * @example
     * // Count the number of EventTargetGroups
     * const count = await prisma.eventTargetGroups.count({
     *   where: {
     *     // ... the filter for the EventTargetGroups we want to count
     *   }
     * })
    **/
    count<T extends EventTargetGroupsCountArgs>(
      args?: Subset<T, EventTargetGroupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventTargetGroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventTargetGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTargetGroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventTargetGroupsAggregateArgs>(args: Subset<T, EventTargetGroupsAggregateArgs>): Prisma.PrismaPromise<GetEventTargetGroupsAggregateType<T>>

    /**
     * Group by EventTargetGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTargetGroupsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventTargetGroupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTargetGroupsGroupByArgs['orderBy'] }
        : { orderBy?: EventTargetGroupsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventTargetGroupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventTargetGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventTargetGroups model
   */
  readonly fields: EventTargetGroupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventTargetGroups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventTargetGroupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targetGroup<T extends TargetGroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TargetGroupDefaultArgs<ExtArgs>>): Prisma__TargetGroupClient<$Result.GetResult<Prisma.$TargetGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventTargetGroups model
   */
  interface EventTargetGroupsFieldRefs {
    readonly eventId: FieldRef<"EventTargetGroups", 'String'>
    readonly targetGroupId: FieldRef<"EventTargetGroups", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventTargetGroups findUnique
   */
  export type EventTargetGroupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTargetGroups
     */
    select?: EventTargetGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTargetGroups
     */
    omit?: EventTargetGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTargetGroupsInclude<ExtArgs> | null
    /**
     * Filter, which EventTargetGroups to fetch.
     */
    where: EventTargetGroupsWhereUniqueInput
  }

  /**
   * EventTargetGroups findUniqueOrThrow
   */
  export type EventTargetGroupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTargetGroups
     */
    select?: EventTargetGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTargetGroups
     */
    omit?: EventTargetGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTargetGroupsInclude<ExtArgs> | null
    /**
     * Filter, which EventTargetGroups to fetch.
     */
    where: EventTargetGroupsWhereUniqueInput
  }

  /**
   * EventTargetGroups findFirst
   */
  export type EventTargetGroupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTargetGroups
     */
    select?: EventTargetGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTargetGroups
     */
    omit?: EventTargetGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTargetGroupsInclude<ExtArgs> | null
    /**
     * Filter, which EventTargetGroups to fetch.
     */
    where?: EventTargetGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTargetGroups to fetch.
     */
    orderBy?: EventTargetGroupsOrderByWithRelationInput | EventTargetGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTargetGroups.
     */
    cursor?: EventTargetGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTargetGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTargetGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTargetGroups.
     */
    distinct?: EventTargetGroupsScalarFieldEnum | EventTargetGroupsScalarFieldEnum[]
  }

  /**
   * EventTargetGroups findFirstOrThrow
   */
  export type EventTargetGroupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTargetGroups
     */
    select?: EventTargetGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTargetGroups
     */
    omit?: EventTargetGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTargetGroupsInclude<ExtArgs> | null
    /**
     * Filter, which EventTargetGroups to fetch.
     */
    where?: EventTargetGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTargetGroups to fetch.
     */
    orderBy?: EventTargetGroupsOrderByWithRelationInput | EventTargetGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTargetGroups.
     */
    cursor?: EventTargetGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTargetGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTargetGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTargetGroups.
     */
    distinct?: EventTargetGroupsScalarFieldEnum | EventTargetGroupsScalarFieldEnum[]
  }

  /**
   * EventTargetGroups findMany
   */
  export type EventTargetGroupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTargetGroups
     */
    select?: EventTargetGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTargetGroups
     */
    omit?: EventTargetGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTargetGroupsInclude<ExtArgs> | null
    /**
     * Filter, which EventTargetGroups to fetch.
     */
    where?: EventTargetGroupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTargetGroups to fetch.
     */
    orderBy?: EventTargetGroupsOrderByWithRelationInput | EventTargetGroupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventTargetGroups.
     */
    cursor?: EventTargetGroupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTargetGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTargetGroups.
     */
    skip?: number
    distinct?: EventTargetGroupsScalarFieldEnum | EventTargetGroupsScalarFieldEnum[]
  }

  /**
   * EventTargetGroups create
   */
  export type EventTargetGroupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTargetGroups
     */
    select?: EventTargetGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTargetGroups
     */
    omit?: EventTargetGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTargetGroupsInclude<ExtArgs> | null
    /**
     * The data needed to create a EventTargetGroups.
     */
    data: XOR<EventTargetGroupsCreateInput, EventTargetGroupsUncheckedCreateInput>
  }

  /**
   * EventTargetGroups createMany
   */
  export type EventTargetGroupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventTargetGroups.
     */
    data: EventTargetGroupsCreateManyInput | EventTargetGroupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventTargetGroups createManyAndReturn
   */
  export type EventTargetGroupsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTargetGroups
     */
    select?: EventTargetGroupsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventTargetGroups
     */
    omit?: EventTargetGroupsOmit<ExtArgs> | null
    /**
     * The data used to create many EventTargetGroups.
     */
    data: EventTargetGroupsCreateManyInput | EventTargetGroupsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTargetGroupsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventTargetGroups update
   */
  export type EventTargetGroupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTargetGroups
     */
    select?: EventTargetGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTargetGroups
     */
    omit?: EventTargetGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTargetGroupsInclude<ExtArgs> | null
    /**
     * The data needed to update a EventTargetGroups.
     */
    data: XOR<EventTargetGroupsUpdateInput, EventTargetGroupsUncheckedUpdateInput>
    /**
     * Choose, which EventTargetGroups to update.
     */
    where: EventTargetGroupsWhereUniqueInput
  }

  /**
   * EventTargetGroups updateMany
   */
  export type EventTargetGroupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventTargetGroups.
     */
    data: XOR<EventTargetGroupsUpdateManyMutationInput, EventTargetGroupsUncheckedUpdateManyInput>
    /**
     * Filter which EventTargetGroups to update
     */
    where?: EventTargetGroupsWhereInput
    /**
     * Limit how many EventTargetGroups to update.
     */
    limit?: number
  }

  /**
   * EventTargetGroups updateManyAndReturn
   */
  export type EventTargetGroupsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTargetGroups
     */
    select?: EventTargetGroupsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventTargetGroups
     */
    omit?: EventTargetGroupsOmit<ExtArgs> | null
    /**
     * The data used to update EventTargetGroups.
     */
    data: XOR<EventTargetGroupsUpdateManyMutationInput, EventTargetGroupsUncheckedUpdateManyInput>
    /**
     * Filter which EventTargetGroups to update
     */
    where?: EventTargetGroupsWhereInput
    /**
     * Limit how many EventTargetGroups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTargetGroupsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventTargetGroups upsert
   */
  export type EventTargetGroupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTargetGroups
     */
    select?: EventTargetGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTargetGroups
     */
    omit?: EventTargetGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTargetGroupsInclude<ExtArgs> | null
    /**
     * The filter to search for the EventTargetGroups to update in case it exists.
     */
    where: EventTargetGroupsWhereUniqueInput
    /**
     * In case the EventTargetGroups found by the `where` argument doesn't exist, create a new EventTargetGroups with this data.
     */
    create: XOR<EventTargetGroupsCreateInput, EventTargetGroupsUncheckedCreateInput>
    /**
     * In case the EventTargetGroups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventTargetGroupsUpdateInput, EventTargetGroupsUncheckedUpdateInput>
  }

  /**
   * EventTargetGroups delete
   */
  export type EventTargetGroupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTargetGroups
     */
    select?: EventTargetGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTargetGroups
     */
    omit?: EventTargetGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTargetGroupsInclude<ExtArgs> | null
    /**
     * Filter which EventTargetGroups to delete.
     */
    where: EventTargetGroupsWhereUniqueInput
  }

  /**
   * EventTargetGroups deleteMany
   */
  export type EventTargetGroupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTargetGroups to delete
     */
    where?: EventTargetGroupsWhereInput
    /**
     * Limit how many EventTargetGroups to delete.
     */
    limit?: number
  }

  /**
   * EventTargetGroups without action
   */
  export type EventTargetGroupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTargetGroups
     */
    select?: EventTargetGroupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventTargetGroups
     */
    omit?: EventTargetGroupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTargetGroupsInclude<ExtArgs> | null
  }


  /**
   * Model Signup
   */

  export type AggregateSignup = {
    _count: SignupCountAggregateOutputType | null
    _avg: SignupAvgAggregateOutputType | null
    _sum: SignupSumAggregateOutputType | null
    _min: SignupMinAggregateOutputType | null
    _max: SignupMaxAggregateOutputType | null
  }

  export type SignupAvgAggregateOutputType = {
    age: number | null
  }

  export type SignupSumAggregateOutputType = {
    age: number | null
  }

  export type SignupMinAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
    age: number | null
    createdAt: Date | null
  }

  export type SignupMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
    age: number | null
    createdAt: Date | null
  }

  export type SignupCountAggregateOutputType = {
    id: number
    userId: number
    eventId: number
    age: number
    createdAt: number
    _all: number
  }


  export type SignupAvgAggregateInputType = {
    age?: true
  }

  export type SignupSumAggregateInputType = {
    age?: true
  }

  export type SignupMinAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    age?: true
    createdAt?: true
  }

  export type SignupMaxAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    age?: true
    createdAt?: true
  }

  export type SignupCountAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    age?: true
    createdAt?: true
    _all?: true
  }

  export type SignupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signup to aggregate.
     */
    where?: SignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signups to fetch.
     */
    orderBy?: SignupOrderByWithRelationInput | SignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Signups
    **/
    _count?: true | SignupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SignupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SignupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignupMaxAggregateInputType
  }

  export type GetSignupAggregateType<T extends SignupAggregateArgs> = {
        [P in keyof T & keyof AggregateSignup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSignup[P]>
      : GetScalarType<T[P], AggregateSignup[P]>
  }




  export type SignupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignupWhereInput
    orderBy?: SignupOrderByWithAggregationInput | SignupOrderByWithAggregationInput[]
    by: SignupScalarFieldEnum[] | SignupScalarFieldEnum
    having?: SignupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignupCountAggregateInputType | true
    _avg?: SignupAvgAggregateInputType
    _sum?: SignupSumAggregateInputType
    _min?: SignupMinAggregateInputType
    _max?: SignupMaxAggregateInputType
  }

  export type SignupGroupByOutputType = {
    id: string
    userId: string
    eventId: string
    age: number | null
    createdAt: Date
    _count: SignupCountAggregateOutputType | null
    _avg: SignupAvgAggregateOutputType | null
    _sum: SignupSumAggregateOutputType | null
    _min: SignupMinAggregateOutputType | null
    _max: SignupMaxAggregateOutputType | null
  }

  type GetSignupGroupByPayload<T extends SignupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignupGroupByOutputType[P]>
            : GetScalarType<T[P], SignupGroupByOutputType[P]>
        }
      >
    >


  export type SignupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    age?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    User?: boolean | Signup$UserArgs<ExtArgs>
    _count?: boolean | SignupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signup"]>

  export type SignupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    age?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signup"]>

  export type SignupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    age?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["signup"]>

  export type SignupSelectScalar = {
    id?: boolean
    userId?: boolean
    eventId?: boolean
    age?: boolean
    createdAt?: boolean
  }

  export type SignupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventId" | "age" | "createdAt", ExtArgs["result"]["signup"]>
  export type SignupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    User?: boolean | Signup$UserArgs<ExtArgs>
    _count?: boolean | SignupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SignupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type SignupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $SignupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Signup"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      eventId: string
      age: number | null
      createdAt: Date
    }, ExtArgs["result"]["signup"]>
    composites: {}
  }

  type SignupGetPayload<S extends boolean | null | undefined | SignupDefaultArgs> = $Result.GetResult<Prisma.$SignupPayload, S>

  type SignupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SignupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SignupCountAggregateInputType | true
    }

  export interface SignupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Signup'], meta: { name: 'Signup' } }
    /**
     * Find zero or one Signup that matches the filter.
     * @param {SignupFindUniqueArgs} args - Arguments to find a Signup
     * @example
     * // Get one Signup
     * const signup = await prisma.signup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignupFindUniqueArgs>(args: SelectSubset<T, SignupFindUniqueArgs<ExtArgs>>): Prisma__SignupClient<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Signup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SignupFindUniqueOrThrowArgs} args - Arguments to find a Signup
     * @example
     * // Get one Signup
     * const signup = await prisma.signup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignupFindUniqueOrThrowArgs>(args: SelectSubset<T, SignupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignupClient<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignupFindFirstArgs} args - Arguments to find a Signup
     * @example
     * // Get one Signup
     * const signup = await prisma.signup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignupFindFirstArgs>(args?: SelectSubset<T, SignupFindFirstArgs<ExtArgs>>): Prisma__SignupClient<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Signup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignupFindFirstOrThrowArgs} args - Arguments to find a Signup
     * @example
     * // Get one Signup
     * const signup = await prisma.signup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignupFindFirstOrThrowArgs>(args?: SelectSubset<T, SignupFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignupClient<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Signups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Signups
     * const signups = await prisma.signup.findMany()
     * 
     * // Get first 10 Signups
     * const signups = await prisma.signup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signupWithIdOnly = await prisma.signup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SignupFindManyArgs>(args?: SelectSubset<T, SignupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Signup.
     * @param {SignupCreateArgs} args - Arguments to create a Signup.
     * @example
     * // Create one Signup
     * const Signup = await prisma.signup.create({
     *   data: {
     *     // ... data to create a Signup
     *   }
     * })
     * 
     */
    create<T extends SignupCreateArgs>(args: SelectSubset<T, SignupCreateArgs<ExtArgs>>): Prisma__SignupClient<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Signups.
     * @param {SignupCreateManyArgs} args - Arguments to create many Signups.
     * @example
     * // Create many Signups
     * const signup = await prisma.signup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignupCreateManyArgs>(args?: SelectSubset<T, SignupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Signups and returns the data saved in the database.
     * @param {SignupCreateManyAndReturnArgs} args - Arguments to create many Signups.
     * @example
     * // Create many Signups
     * const signup = await prisma.signup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Signups and only return the `id`
     * const signupWithIdOnly = await prisma.signup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SignupCreateManyAndReturnArgs>(args?: SelectSubset<T, SignupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Signup.
     * @param {SignupDeleteArgs} args - Arguments to delete one Signup.
     * @example
     * // Delete one Signup
     * const Signup = await prisma.signup.delete({
     *   where: {
     *     // ... filter to delete one Signup
     *   }
     * })
     * 
     */
    delete<T extends SignupDeleteArgs>(args: SelectSubset<T, SignupDeleteArgs<ExtArgs>>): Prisma__SignupClient<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Signup.
     * @param {SignupUpdateArgs} args - Arguments to update one Signup.
     * @example
     * // Update one Signup
     * const signup = await prisma.signup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignupUpdateArgs>(args: SelectSubset<T, SignupUpdateArgs<ExtArgs>>): Prisma__SignupClient<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Signups.
     * @param {SignupDeleteManyArgs} args - Arguments to filter Signups to delete.
     * @example
     * // Delete a few Signups
     * const { count } = await prisma.signup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignupDeleteManyArgs>(args?: SelectSubset<T, SignupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Signups
     * const signup = await prisma.signup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignupUpdateManyArgs>(args: SelectSubset<T, SignupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signups and returns the data updated in the database.
     * @param {SignupUpdateManyAndReturnArgs} args - Arguments to update many Signups.
     * @example
     * // Update many Signups
     * const signup = await prisma.signup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Signups and only return the `id`
     * const signupWithIdOnly = await prisma.signup.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SignupUpdateManyAndReturnArgs>(args: SelectSubset<T, SignupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Signup.
     * @param {SignupUpsertArgs} args - Arguments to update or create a Signup.
     * @example
     * // Update or create a Signup
     * const signup = await prisma.signup.upsert({
     *   create: {
     *     // ... data to create a Signup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Signup we want to update
     *   }
     * })
     */
    upsert<T extends SignupUpsertArgs>(args: SelectSubset<T, SignupUpsertArgs<ExtArgs>>): Prisma__SignupClient<$Result.GetResult<Prisma.$SignupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Signups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignupCountArgs} args - Arguments to filter Signups to count.
     * @example
     * // Count the number of Signups
     * const count = await prisma.signup.count({
     *   where: {
     *     // ... the filter for the Signups we want to count
     *   }
     * })
    **/
    count<T extends SignupCountArgs>(
      args?: Subset<T, SignupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Signup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SignupAggregateArgs>(args: Subset<T, SignupAggregateArgs>): Prisma.PrismaPromise<GetSignupAggregateType<T>>

    /**
     * Group by Signup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SignupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignupGroupByArgs['orderBy'] }
        : { orderBy?: SignupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SignupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Signup model
   */
  readonly fields: SignupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Signup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends Signup$UserArgs<ExtArgs> = {}>(args?: Subset<T, Signup$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Signup model
   */
  interface SignupFieldRefs {
    readonly id: FieldRef<"Signup", 'String'>
    readonly userId: FieldRef<"Signup", 'String'>
    readonly eventId: FieldRef<"Signup", 'String'>
    readonly age: FieldRef<"Signup", 'Int'>
    readonly createdAt: FieldRef<"Signup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Signup findUnique
   */
  export type SignupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignupInclude<ExtArgs> | null
    /**
     * Filter, which Signup to fetch.
     */
    where: SignupWhereUniqueInput
  }

  /**
   * Signup findUniqueOrThrow
   */
  export type SignupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignupInclude<ExtArgs> | null
    /**
     * Filter, which Signup to fetch.
     */
    where: SignupWhereUniqueInput
  }

  /**
   * Signup findFirst
   */
  export type SignupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignupInclude<ExtArgs> | null
    /**
     * Filter, which Signup to fetch.
     */
    where?: SignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signups to fetch.
     */
    orderBy?: SignupOrderByWithRelationInput | SignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signups.
     */
    cursor?: SignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signups.
     */
    distinct?: SignupScalarFieldEnum | SignupScalarFieldEnum[]
  }

  /**
   * Signup findFirstOrThrow
   */
  export type SignupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignupInclude<ExtArgs> | null
    /**
     * Filter, which Signup to fetch.
     */
    where?: SignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signups to fetch.
     */
    orderBy?: SignupOrderByWithRelationInput | SignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signups.
     */
    cursor?: SignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signups.
     */
    distinct?: SignupScalarFieldEnum | SignupScalarFieldEnum[]
  }

  /**
   * Signup findMany
   */
  export type SignupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignupInclude<ExtArgs> | null
    /**
     * Filter, which Signups to fetch.
     */
    where?: SignupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signups to fetch.
     */
    orderBy?: SignupOrderByWithRelationInput | SignupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Signups.
     */
    cursor?: SignupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signups.
     */
    skip?: number
    distinct?: SignupScalarFieldEnum | SignupScalarFieldEnum[]
  }

  /**
   * Signup create
   */
  export type SignupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignupInclude<ExtArgs> | null
    /**
     * The data needed to create a Signup.
     */
    data: XOR<SignupCreateInput, SignupUncheckedCreateInput>
  }

  /**
   * Signup createMany
   */
  export type SignupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Signups.
     */
    data: SignupCreateManyInput | SignupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Signup createManyAndReturn
   */
  export type SignupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * The data used to create many Signups.
     */
    data: SignupCreateManyInput | SignupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Signup update
   */
  export type SignupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignupInclude<ExtArgs> | null
    /**
     * The data needed to update a Signup.
     */
    data: XOR<SignupUpdateInput, SignupUncheckedUpdateInput>
    /**
     * Choose, which Signup to update.
     */
    where: SignupWhereUniqueInput
  }

  /**
   * Signup updateMany
   */
  export type SignupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Signups.
     */
    data: XOR<SignupUpdateManyMutationInput, SignupUncheckedUpdateManyInput>
    /**
     * Filter which Signups to update
     */
    where?: SignupWhereInput
    /**
     * Limit how many Signups to update.
     */
    limit?: number
  }

  /**
   * Signup updateManyAndReturn
   */
  export type SignupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * The data used to update Signups.
     */
    data: XOR<SignupUpdateManyMutationInput, SignupUncheckedUpdateManyInput>
    /**
     * Filter which Signups to update
     */
    where?: SignupWhereInput
    /**
     * Limit how many Signups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Signup upsert
   */
  export type SignupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignupInclude<ExtArgs> | null
    /**
     * The filter to search for the Signup to update in case it exists.
     */
    where: SignupWhereUniqueInput
    /**
     * In case the Signup found by the `where` argument doesn't exist, create a new Signup with this data.
     */
    create: XOR<SignupCreateInput, SignupUncheckedCreateInput>
    /**
     * In case the Signup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignupUpdateInput, SignupUncheckedUpdateInput>
  }

  /**
   * Signup delete
   */
  export type SignupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignupInclude<ExtArgs> | null
    /**
     * Filter which Signup to delete.
     */
    where: SignupWhereUniqueInput
  }

  /**
   * Signup deleteMany
   */
  export type SignupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signups to delete
     */
    where?: SignupWhereInput
    /**
     * Limit how many Signups to delete.
     */
    limit?: number
  }

  /**
   * Signup.User
   */
  export type Signup$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Signup without action
   */
  export type SignupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Signup
     */
    select?: SignupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Signup
     */
    omit?: SignupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignupInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    userId: number
    eventId: number
    role: number
    createdAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    role?: true
    createdAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    role?: true
    createdAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    userId: string
    eventId: string
    role: string
    createdAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    role?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    User?: boolean | Role$UserArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    role?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    role?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    userId?: boolean
    eventId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventId" | "role" | "createdAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    User?: boolean | Role$UserArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      eventId: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends Role$UserArgs<ExtArgs> = {}>(args?: Subset<T, Role$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly userId: FieldRef<"Role", 'String'>
    readonly eventId: FieldRef<"Role", 'String'>
    readonly role: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.User
   */
  export type Role$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MarkerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    latitude: 'latitude',
    longitude: 'longitude',
    type: 'type',
    icon: 'icon',
    eventId: 'eventId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MarkerScalarFieldEnum = (typeof MarkerScalarFieldEnum)[keyof typeof MarkerScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    email: 'email',
    imageUrl: 'imageUrl',
    bio: 'bio',
    phone: 'phone',
    location: 'location',
    birthdate: 'birthdate',
    gender: 'gender',
    website: 'website',
    facebook: 'facebook',
    instagram: 'instagram',
    twitter: 'twitter',
    linkedin: 'linkedin',
    interests: 'interests',
    languages: 'languages',
    isPublic: 'isPublic',
    lastActiveAt: 'lastActiveAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    date: 'date',
    location: 'location',
    latitude: 'latitude',
    longitude: 'longitude',
    image: 'image',
    createdAt: 'createdAt',
    organizerId: 'organizerId'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const TargetGroupScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TargetGroupScalarFieldEnum = (typeof TargetGroupScalarFieldEnum)[keyof typeof TargetGroupScalarFieldEnum]


  export const EventTargetGroupsScalarFieldEnum: {
    eventId: 'eventId',
    targetGroupId: 'targetGroupId'
  };

  export type EventTargetGroupsScalarFieldEnum = (typeof EventTargetGroupsScalarFieldEnum)[keyof typeof EventTargetGroupsScalarFieldEnum]


  export const SignupScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventId: 'eventId',
    age: 'age',
    createdAt: 'createdAt'
  };

  export type SignupScalarFieldEnum = (typeof SignupScalarFieldEnum)[keyof typeof SignupScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventId: 'eventId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type MarkerWhereInput = {
    AND?: MarkerWhereInput | MarkerWhereInput[]
    OR?: MarkerWhereInput[]
    NOT?: MarkerWhereInput | MarkerWhereInput[]
    id?: StringFilter<"Marker"> | string
    userId?: StringFilter<"Marker"> | string
    title?: StringFilter<"Marker"> | string
    description?: StringNullableFilter<"Marker"> | string | null
    latitude?: FloatFilter<"Marker"> | number
    longitude?: FloatFilter<"Marker"> | number
    type?: StringFilter<"Marker"> | string
    icon?: StringNullableFilter<"Marker"> | string | null
    eventId?: StringNullableFilter<"Marker"> | string | null
    createdAt?: DateTimeFilter<"Marker"> | Date | string
    updatedAt?: DateTimeFilter<"Marker"> | Date | string
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
    User?: UserListRelationFilter
  }

  export type MarkerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    type?: SortOrder
    icon?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    event?: EventOrderByWithRelationInput
    User?: UserOrderByRelationAggregateInput
  }

  export type MarkerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MarkerWhereInput | MarkerWhereInput[]
    OR?: MarkerWhereInput[]
    NOT?: MarkerWhereInput | MarkerWhereInput[]
    userId?: StringFilter<"Marker"> | string
    title?: StringFilter<"Marker"> | string
    description?: StringNullableFilter<"Marker"> | string | null
    latitude?: FloatFilter<"Marker"> | number
    longitude?: FloatFilter<"Marker"> | number
    type?: StringFilter<"Marker"> | string
    icon?: StringNullableFilter<"Marker"> | string | null
    eventId?: StringNullableFilter<"Marker"> | string | null
    createdAt?: DateTimeFilter<"Marker"> | Date | string
    updatedAt?: DateTimeFilter<"Marker"> | Date | string
    event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
    User?: UserListRelationFilter
  }, "id">

  export type MarkerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    type?: SortOrder
    icon?: SortOrderInput | SortOrder
    eventId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MarkerCountOrderByAggregateInput
    _avg?: MarkerAvgOrderByAggregateInput
    _max?: MarkerMaxOrderByAggregateInput
    _min?: MarkerMinOrderByAggregateInput
    _sum?: MarkerSumOrderByAggregateInput
  }

  export type MarkerScalarWhereWithAggregatesInput = {
    AND?: MarkerScalarWhereWithAggregatesInput | MarkerScalarWhereWithAggregatesInput[]
    OR?: MarkerScalarWhereWithAggregatesInput[]
    NOT?: MarkerScalarWhereWithAggregatesInput | MarkerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Marker"> | string
    userId?: StringWithAggregatesFilter<"Marker"> | string
    title?: StringWithAggregatesFilter<"Marker"> | string
    description?: StringNullableWithAggregatesFilter<"Marker"> | string | null
    latitude?: FloatWithAggregatesFilter<"Marker"> | number
    longitude?: FloatWithAggregatesFilter<"Marker"> | number
    type?: StringWithAggregatesFilter<"Marker"> | string
    icon?: StringNullableWithAggregatesFilter<"Marker"> | string | null
    eventId?: StringNullableWithAggregatesFilter<"Marker"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Marker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Marker"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    userId?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    birthdate?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: StringNullableFilter<"User"> | string | null
    website?: StringNullableFilter<"User"> | string | null
    facebook?: StringNullableFilter<"User"> | string | null
    instagram?: StringNullableFilter<"User"> | string | null
    twitter?: StringNullableFilter<"User"> | string | null
    linkedin?: StringNullableFilter<"User"> | string | null
    interests?: StringNullableListFilter<"User">
    languages?: StringNullableListFilter<"User">
    isPublic?: BoolFilter<"User"> | boolean
    lastActiveAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    events?: EventListRelationFilter
    signups?: SignupListRelationFilter
    roles?: RoleListRelationFilter
    markers?: MarkerListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    interests?: SortOrder
    languages?: SortOrder
    isPublic?: SortOrder
    lastActiveAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    events?: EventOrderByRelationAggregateInput
    signups?: SignupOrderByRelationAggregateInput
    roles?: RoleOrderByRelationAggregateInput
    markers?: MarkerOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    imageUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    birthdate?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: StringNullableFilter<"User"> | string | null
    website?: StringNullableFilter<"User"> | string | null
    facebook?: StringNullableFilter<"User"> | string | null
    instagram?: StringNullableFilter<"User"> | string | null
    twitter?: StringNullableFilter<"User"> | string | null
    linkedin?: StringNullableFilter<"User"> | string | null
    interests?: StringNullableListFilter<"User">
    languages?: StringNullableListFilter<"User">
    isPublic?: BoolFilter<"User"> | boolean
    lastActiveAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    events?: EventListRelationFilter
    signups?: SignupListRelationFilter
    roles?: RoleListRelationFilter
    markers?: MarkerListRelationFilter
  }, "id" | "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    birthdate?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    facebook?: SortOrderInput | SortOrder
    instagram?: SortOrderInput | SortOrder
    twitter?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    interests?: SortOrder
    languages?: SortOrder
    isPublic?: SortOrder
    lastActiveAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    userId?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    location?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthdate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    website?: StringNullableWithAggregatesFilter<"User"> | string | null
    facebook?: StringNullableWithAggregatesFilter<"User"> | string | null
    instagram?: StringNullableWithAggregatesFilter<"User"> | string | null
    twitter?: StringNullableWithAggregatesFilter<"User"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"User"> | string | null
    interests?: StringNullableListFilter<"User">
    languages?: StringNullableListFilter<"User">
    isPublic?: BoolWithAggregatesFilter<"User"> | boolean
    lastActiveAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    type?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    location?: StringFilter<"Event"> | string
    latitude?: FloatNullableFilter<"Event"> | number | null
    longitude?: FloatNullableFilter<"Event"> | number | null
    image?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    organizerId?: StringFilter<"Event"> | string
    targetGroups?: EventTargetGroupsListRelationFilter
    signups?: SignupListRelationFilter
    roles?: RoleListRelationFilter
    Marker?: MarkerListRelationFilter
    User?: UserListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    date?: SortOrder
    location?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    organizerId?: SortOrder
    targetGroups?: EventTargetGroupsOrderByRelationAggregateInput
    signups?: SignupOrderByRelationAggregateInput
    roles?: RoleOrderByRelationAggregateInput
    Marker?: MarkerOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    type?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    location?: StringFilter<"Event"> | string
    latitude?: FloatNullableFilter<"Event"> | number | null
    longitude?: FloatNullableFilter<"Event"> | number | null
    image?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    organizerId?: StringFilter<"Event"> | string
    targetGroups?: EventTargetGroupsListRelationFilter
    signups?: SignupListRelationFilter
    roles?: RoleListRelationFilter
    Marker?: MarkerListRelationFilter
    User?: UserListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    date?: SortOrder
    location?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    organizerId?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    type?: StringWithAggregatesFilter<"Event"> | string
    date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    location?: StringWithAggregatesFilter<"Event"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Event"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Event"> | number | null
    image?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    organizerId?: StringWithAggregatesFilter<"Event"> | string
  }

  export type TargetGroupWhereInput = {
    AND?: TargetGroupWhereInput | TargetGroupWhereInput[]
    OR?: TargetGroupWhereInput[]
    NOT?: TargetGroupWhereInput | TargetGroupWhereInput[]
    id?: StringFilter<"TargetGroup"> | string
    name?: StringFilter<"TargetGroup"> | string
    events?: EventTargetGroupsListRelationFilter
  }

  export type TargetGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    events?: EventTargetGroupsOrderByRelationAggregateInput
  }

  export type TargetGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TargetGroupWhereInput | TargetGroupWhereInput[]
    OR?: TargetGroupWhereInput[]
    NOT?: TargetGroupWhereInput | TargetGroupWhereInput[]
    name?: StringFilter<"TargetGroup"> | string
    events?: EventTargetGroupsListRelationFilter
  }, "id">

  export type TargetGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TargetGroupCountOrderByAggregateInput
    _max?: TargetGroupMaxOrderByAggregateInput
    _min?: TargetGroupMinOrderByAggregateInput
  }

  export type TargetGroupScalarWhereWithAggregatesInput = {
    AND?: TargetGroupScalarWhereWithAggregatesInput | TargetGroupScalarWhereWithAggregatesInput[]
    OR?: TargetGroupScalarWhereWithAggregatesInput[]
    NOT?: TargetGroupScalarWhereWithAggregatesInput | TargetGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TargetGroup"> | string
    name?: StringWithAggregatesFilter<"TargetGroup"> | string
  }

  export type EventTargetGroupsWhereInput = {
    AND?: EventTargetGroupsWhereInput | EventTargetGroupsWhereInput[]
    OR?: EventTargetGroupsWhereInput[]
    NOT?: EventTargetGroupsWhereInput | EventTargetGroupsWhereInput[]
    eventId?: StringFilter<"EventTargetGroups"> | string
    targetGroupId?: StringFilter<"EventTargetGroups"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    targetGroup?: XOR<TargetGroupScalarRelationFilter, TargetGroupWhereInput>
  }

  export type EventTargetGroupsOrderByWithRelationInput = {
    eventId?: SortOrder
    targetGroupId?: SortOrder
    event?: EventOrderByWithRelationInput
    targetGroup?: TargetGroupOrderByWithRelationInput
  }

  export type EventTargetGroupsWhereUniqueInput = Prisma.AtLeast<{
    eventId_targetGroupId?: EventTargetGroupsEventIdTargetGroupIdCompoundUniqueInput
    AND?: EventTargetGroupsWhereInput | EventTargetGroupsWhereInput[]
    OR?: EventTargetGroupsWhereInput[]
    NOT?: EventTargetGroupsWhereInput | EventTargetGroupsWhereInput[]
    eventId?: StringFilter<"EventTargetGroups"> | string
    targetGroupId?: StringFilter<"EventTargetGroups"> | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    targetGroup?: XOR<TargetGroupScalarRelationFilter, TargetGroupWhereInput>
  }, "eventId_targetGroupId">

  export type EventTargetGroupsOrderByWithAggregationInput = {
    eventId?: SortOrder
    targetGroupId?: SortOrder
    _count?: EventTargetGroupsCountOrderByAggregateInput
    _max?: EventTargetGroupsMaxOrderByAggregateInput
    _min?: EventTargetGroupsMinOrderByAggregateInput
  }

  export type EventTargetGroupsScalarWhereWithAggregatesInput = {
    AND?: EventTargetGroupsScalarWhereWithAggregatesInput | EventTargetGroupsScalarWhereWithAggregatesInput[]
    OR?: EventTargetGroupsScalarWhereWithAggregatesInput[]
    NOT?: EventTargetGroupsScalarWhereWithAggregatesInput | EventTargetGroupsScalarWhereWithAggregatesInput[]
    eventId?: StringWithAggregatesFilter<"EventTargetGroups"> | string
    targetGroupId?: StringWithAggregatesFilter<"EventTargetGroups"> | string
  }

  export type SignupWhereInput = {
    AND?: SignupWhereInput | SignupWhereInput[]
    OR?: SignupWhereInput[]
    NOT?: SignupWhereInput | SignupWhereInput[]
    id?: StringFilter<"Signup"> | string
    userId?: StringFilter<"Signup"> | string
    eventId?: StringFilter<"Signup"> | string
    age?: IntNullableFilter<"Signup"> | number | null
    createdAt?: DateTimeFilter<"Signup"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    User?: UserListRelationFilter
  }

  export type SignupOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    age?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
    User?: UserOrderByRelationAggregateInput
  }

  export type SignupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_eventId?: SignupUserIdEventIdCompoundUniqueInput
    AND?: SignupWhereInput | SignupWhereInput[]
    OR?: SignupWhereInput[]
    NOT?: SignupWhereInput | SignupWhereInput[]
    userId?: StringFilter<"Signup"> | string
    eventId?: StringFilter<"Signup"> | string
    age?: IntNullableFilter<"Signup"> | number | null
    createdAt?: DateTimeFilter<"Signup"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    User?: UserListRelationFilter
  }, "id" | "userId_eventId">

  export type SignupOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    age?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SignupCountOrderByAggregateInput
    _avg?: SignupAvgOrderByAggregateInput
    _max?: SignupMaxOrderByAggregateInput
    _min?: SignupMinOrderByAggregateInput
    _sum?: SignupSumOrderByAggregateInput
  }

  export type SignupScalarWhereWithAggregatesInput = {
    AND?: SignupScalarWhereWithAggregatesInput | SignupScalarWhereWithAggregatesInput[]
    OR?: SignupScalarWhereWithAggregatesInput[]
    NOT?: SignupScalarWhereWithAggregatesInput | SignupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Signup"> | string
    userId?: StringWithAggregatesFilter<"Signup"> | string
    eventId?: StringWithAggregatesFilter<"Signup"> | string
    age?: IntNullableWithAggregatesFilter<"Signup"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Signup"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    userId?: StringFilter<"Role"> | string
    eventId?: StringFilter<"Role"> | string
    role?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    User?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
    User?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    userId?: StringFilter<"Role"> | string
    eventId?: StringFilter<"Role"> | string
    role?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    User?: UserListRelationFilter
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    userId?: StringWithAggregatesFilter<"Role"> | string
    eventId?: StringWithAggregatesFilter<"Role"> | string
    role?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type MarkerCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    latitude: number
    longitude: number
    type: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutMarkerInput
    User?: UserCreateNestedManyWithoutMarkersInput
  }

  export type MarkerUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    latitude: number
    longitude: number
    type: string
    icon?: string | null
    eventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutMarkersInput
  }

  export type MarkerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutMarkerNestedInput
    User?: UserUpdateManyWithoutMarkersNestedInput
  }

  export type MarkerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutMarkersNestedInput
  }

  export type MarkerCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    latitude: number
    longitude: number
    type: string
    icon?: string | null
    eventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarkerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarkerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    userId: string
    name?: string | null
    email: string
    imageUrl?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    birthdate?: Date | string | null
    gender?: string | null
    website?: string | null
    facebook?: string | null
    instagram?: string | null
    twitter?: string | null
    linkedin?: string | null
    interests?: UserCreateinterestsInput | string[]
    languages?: UserCreatelanguagesInput | string[]
    isPublic?: boolean
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutUserInput
    signups?: SignupCreateNestedManyWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUserInput
    markers?: MarkerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    userId: string
    name?: string | null
    email: string
    imageUrl?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    birthdate?: Date | string | null
    gender?: string | null
    website?: string | null
    facebook?: string | null
    instagram?: string | null
    twitter?: string | null
    linkedin?: string | null
    interests?: UserCreateinterestsInput | string[]
    languages?: UserCreatelanguagesInput | string[]
    isPublic?: boolean
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    signups?: SignupUncheckedCreateNestedManyWithoutUserInput
    roles?: RoleUncheckedCreateNestedManyWithoutUserInput
    markers?: MarkerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    languages?: UserUpdatelanguagesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutUserNestedInput
    signups?: SignupUpdateManyWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUserNestedInput
    markers?: MarkerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    languages?: UserUpdatelanguagesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    signups?: SignupUncheckedUpdateManyWithoutUserNestedInput
    roles?: RoleUncheckedUpdateManyWithoutUserNestedInput
    markers?: MarkerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    userId: string
    name?: string | null
    email: string
    imageUrl?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    birthdate?: Date | string | null
    gender?: string | null
    website?: string | null
    facebook?: string | null
    instagram?: string | null
    twitter?: string | null
    linkedin?: string | null
    interests?: UserCreateinterestsInput | string[]
    languages?: UserCreatelanguagesInput | string[]
    isPublic?: boolean
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    languages?: UserUpdatelanguagesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    languages?: UserUpdatelanguagesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    date: Date | string
    location: string
    latitude?: number | null
    longitude?: number | null
    image?: string | null
    createdAt?: Date | string
    organizerId: string
    targetGroups?: EventTargetGroupsCreateNestedManyWithoutEventInput
    signups?: SignupCreateNestedManyWithoutEventInput
    roles?: RoleCreateNestedManyWithoutEventInput
    Marker?: MarkerCreateNestedManyWithoutEventInput
    User?: UserCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    date: Date | string
    location: string
    latitude?: number | null
    longitude?: number | null
    image?: string | null
    createdAt?: Date | string
    organizerId: string
    targetGroups?: EventTargetGroupsUncheckedCreateNestedManyWithoutEventInput
    signups?: SignupUncheckedCreateNestedManyWithoutEventInput
    roles?: RoleUncheckedCreateNestedManyWithoutEventInput
    Marker?: MarkerUncheckedCreateNestedManyWithoutEventInput
    User?: UserUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
    targetGroups?: EventTargetGroupsUpdateManyWithoutEventNestedInput
    signups?: SignupUpdateManyWithoutEventNestedInput
    roles?: RoleUpdateManyWithoutEventNestedInput
    Marker?: MarkerUpdateManyWithoutEventNestedInput
    User?: UserUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
    targetGroups?: EventTargetGroupsUncheckedUpdateManyWithoutEventNestedInput
    signups?: SignupUncheckedUpdateManyWithoutEventNestedInput
    roles?: RoleUncheckedUpdateManyWithoutEventNestedInput
    Marker?: MarkerUncheckedUpdateManyWithoutEventNestedInput
    User?: UserUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    date: Date | string
    location: string
    latitude?: number | null
    longitude?: number | null
    image?: string | null
    createdAt?: Date | string
    organizerId: string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
  }

  export type TargetGroupCreateInput = {
    id?: string
    name: string
    events?: EventTargetGroupsCreateNestedManyWithoutTargetGroupInput
  }

  export type TargetGroupUncheckedCreateInput = {
    id?: string
    name: string
    events?: EventTargetGroupsUncheckedCreateNestedManyWithoutTargetGroupInput
  }

  export type TargetGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    events?: EventTargetGroupsUpdateManyWithoutTargetGroupNestedInput
  }

  export type TargetGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    events?: EventTargetGroupsUncheckedUpdateManyWithoutTargetGroupNestedInput
  }

  export type TargetGroupCreateManyInput = {
    id?: string
    name: string
  }

  export type TargetGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TargetGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EventTargetGroupsCreateInput = {
    event: EventCreateNestedOneWithoutTargetGroupsInput
    targetGroup: TargetGroupCreateNestedOneWithoutEventsInput
  }

  export type EventTargetGroupsUncheckedCreateInput = {
    eventId: string
    targetGroupId: string
  }

  export type EventTargetGroupsUpdateInput = {
    event?: EventUpdateOneRequiredWithoutTargetGroupsNestedInput
    targetGroup?: TargetGroupUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventTargetGroupsUncheckedUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    targetGroupId?: StringFieldUpdateOperationsInput | string
  }

  export type EventTargetGroupsCreateManyInput = {
    eventId: string
    targetGroupId: string
  }

  export type EventTargetGroupsUpdateManyMutationInput = {

  }

  export type EventTargetGroupsUncheckedUpdateManyInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    targetGroupId?: StringFieldUpdateOperationsInput | string
  }

  export type SignupCreateInput = {
    id?: string
    userId: string
    age?: number | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutSignupsInput
    User?: UserCreateNestedManyWithoutSignupsInput
  }

  export type SignupUncheckedCreateInput = {
    id?: string
    userId: string
    eventId: string
    age?: number | null
    createdAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutSignupsInput
  }

  export type SignupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutSignupsNestedInput
    User?: UserUpdateManyWithoutSignupsNestedInput
  }

  export type SignupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutSignupsNestedInput
  }

  export type SignupCreateManyInput = {
    id?: string
    userId: string
    eventId: string
    age?: number | null
    createdAt?: Date | string
  }

  export type SignupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    userId: string
    role: string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutRolesInput
    User?: UserCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    userId: string
    eventId: string
    role: string
    createdAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutRolesNestedInput
    User?: UserUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    userId: string
    eventId: string
    role: string
    createdAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventNullableScalarRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarkerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarkerAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type MarkerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarkerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    eventId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MarkerSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type SignupListRelationFilter = {
    every?: SignupWhereInput
    some?: SignupWhereInput
    none?: SignupWhereInput
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type MarkerListRelationFilter = {
    every?: MarkerWhereInput
    some?: MarkerWhereInput
    none?: MarkerWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SignupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarkerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    website?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    twitter?: SortOrder
    linkedin?: SortOrder
    interests?: SortOrder
    languages?: SortOrder
    isPublic?: SortOrder
    lastActiveAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    website?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    twitter?: SortOrder
    linkedin?: SortOrder
    isPublic?: SortOrder
    lastActiveAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    website?: SortOrder
    facebook?: SortOrder
    instagram?: SortOrder
    twitter?: SortOrder
    linkedin?: SortOrder
    isPublic?: SortOrder
    lastActiveAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EventTargetGroupsListRelationFilter = {
    every?: EventTargetGroupsWhereInput
    some?: EventTargetGroupsWhereInput
    none?: EventTargetGroupsWhereInput
  }

  export type EventTargetGroupsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    date?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    organizerId?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    date?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    organizerId?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    date?: SortOrder
    location?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    organizerId?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type TargetGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TargetGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TargetGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type TargetGroupScalarRelationFilter = {
    is?: TargetGroupWhereInput
    isNot?: TargetGroupWhereInput
  }

  export type EventTargetGroupsEventIdTargetGroupIdCompoundUniqueInput = {
    eventId: string
    targetGroupId: string
  }

  export type EventTargetGroupsCountOrderByAggregateInput = {
    eventId?: SortOrder
    targetGroupId?: SortOrder
  }

  export type EventTargetGroupsMaxOrderByAggregateInput = {
    eventId?: SortOrder
    targetGroupId?: SortOrder
  }

  export type EventTargetGroupsMinOrderByAggregateInput = {
    eventId?: SortOrder
    targetGroupId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SignupUserIdEventIdCompoundUniqueInput = {
    userId: string
    eventId: string
  }

  export type SignupCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
  }

  export type SignupAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type SignupMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
  }

  export type SignupMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    age?: SortOrder
    createdAt?: SortOrder
  }

  export type SignupSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type EventCreateNestedOneWithoutMarkerInput = {
    create?: XOR<EventCreateWithoutMarkerInput, EventUncheckedCreateWithoutMarkerInput>
    connectOrCreate?: EventCreateOrConnectWithoutMarkerInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutMarkersInput = {
    create?: XOR<UserCreateWithoutMarkersInput, UserUncheckedCreateWithoutMarkersInput> | UserCreateWithoutMarkersInput[] | UserUncheckedCreateWithoutMarkersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMarkersInput | UserCreateOrConnectWithoutMarkersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutMarkersInput = {
    create?: XOR<UserCreateWithoutMarkersInput, UserUncheckedCreateWithoutMarkersInput> | UserCreateWithoutMarkersInput[] | UserUncheckedCreateWithoutMarkersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMarkersInput | UserCreateOrConnectWithoutMarkersInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateOneWithoutMarkerNestedInput = {
    create?: XOR<EventCreateWithoutMarkerInput, EventUncheckedCreateWithoutMarkerInput>
    connectOrCreate?: EventCreateOrConnectWithoutMarkerInput
    upsert?: EventUpsertWithoutMarkerInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutMarkerInput, EventUpdateWithoutMarkerInput>, EventUncheckedUpdateWithoutMarkerInput>
  }

  export type UserUpdateManyWithoutMarkersNestedInput = {
    create?: XOR<UserCreateWithoutMarkersInput, UserUncheckedCreateWithoutMarkersInput> | UserCreateWithoutMarkersInput[] | UserUncheckedCreateWithoutMarkersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMarkersInput | UserCreateOrConnectWithoutMarkersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutMarkersInput | UserUpsertWithWhereUniqueWithoutMarkersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutMarkersInput | UserUpdateWithWhereUniqueWithoutMarkersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutMarkersInput | UserUpdateManyWithWhereWithoutMarkersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutMarkersNestedInput = {
    create?: XOR<UserCreateWithoutMarkersInput, UserUncheckedCreateWithoutMarkersInput> | UserCreateWithoutMarkersInput[] | UserUncheckedCreateWithoutMarkersInput[]
    connectOrCreate?: UserCreateOrConnectWithoutMarkersInput | UserCreateOrConnectWithoutMarkersInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutMarkersInput | UserUpsertWithWhereUniqueWithoutMarkersInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutMarkersInput | UserUpdateWithWhereUniqueWithoutMarkersInput[]
    updateMany?: UserUpdateManyWithWhereWithoutMarkersInput | UserUpdateManyWithWhereWithoutMarkersInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateinterestsInput = {
    set: string[]
  }

  export type UserCreatelanguagesInput = {
    set: string[]
  }

  export type EventCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type SignupCreateNestedManyWithoutUserInput = {
    create?: XOR<SignupCreateWithoutUserInput, SignupUncheckedCreateWithoutUserInput> | SignupCreateWithoutUserInput[] | SignupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SignupCreateOrConnectWithoutUserInput | SignupCreateOrConnectWithoutUserInput[]
    connect?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutUserInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput> | RoleCreateWithoutUserInput[] | RoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput | RoleCreateOrConnectWithoutUserInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type MarkerCreateNestedManyWithoutUserInput = {
    create?: XOR<MarkerCreateWithoutUserInput, MarkerUncheckedCreateWithoutUserInput> | MarkerCreateWithoutUserInput[] | MarkerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarkerCreateOrConnectWithoutUserInput | MarkerCreateOrConnectWithoutUserInput[]
    connect?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type SignupUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SignupCreateWithoutUserInput, SignupUncheckedCreateWithoutUserInput> | SignupCreateWithoutUserInput[] | SignupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SignupCreateOrConnectWithoutUserInput | SignupCreateOrConnectWithoutUserInput[]
    connect?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput> | RoleCreateWithoutUserInput[] | RoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput | RoleCreateOrConnectWithoutUserInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type MarkerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MarkerCreateWithoutUserInput, MarkerUncheckedCreateWithoutUserInput> | MarkerCreateWithoutUserInput[] | MarkerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarkerCreateOrConnectWithoutUserInput | MarkerCreateOrConnectWithoutUserInput[]
    connect?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateinterestsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EventUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type SignupUpdateManyWithoutUserNestedInput = {
    create?: XOR<SignupCreateWithoutUserInput, SignupUncheckedCreateWithoutUserInput> | SignupCreateWithoutUserInput[] | SignupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SignupCreateOrConnectWithoutUserInput | SignupCreateOrConnectWithoutUserInput[]
    upsert?: SignupUpsertWithWhereUniqueWithoutUserInput | SignupUpsertWithWhereUniqueWithoutUserInput[]
    set?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
    disconnect?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
    delete?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
    connect?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
    update?: SignupUpdateWithWhereUniqueWithoutUserInput | SignupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SignupUpdateManyWithWhereWithoutUserInput | SignupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SignupScalarWhereInput | SignupScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput> | RoleCreateWithoutUserInput[] | RoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput | RoleCreateOrConnectWithoutUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUserInput | RoleUpsertWithWhereUniqueWithoutUserInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUserInput | RoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUserInput | RoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type MarkerUpdateManyWithoutUserNestedInput = {
    create?: XOR<MarkerCreateWithoutUserInput, MarkerUncheckedCreateWithoutUserInput> | MarkerCreateWithoutUserInput[] | MarkerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarkerCreateOrConnectWithoutUserInput | MarkerCreateOrConnectWithoutUserInput[]
    upsert?: MarkerUpsertWithWhereUniqueWithoutUserInput | MarkerUpsertWithWhereUniqueWithoutUserInput[]
    set?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
    disconnect?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
    delete?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
    connect?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
    update?: MarkerUpdateWithWhereUniqueWithoutUserInput | MarkerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MarkerUpdateManyWithWhereWithoutUserInput | MarkerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MarkerScalarWhereInput | MarkerScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type SignupUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SignupCreateWithoutUserInput, SignupUncheckedCreateWithoutUserInput> | SignupCreateWithoutUserInput[] | SignupUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SignupCreateOrConnectWithoutUserInput | SignupCreateOrConnectWithoutUserInput[]
    upsert?: SignupUpsertWithWhereUniqueWithoutUserInput | SignupUpsertWithWhereUniqueWithoutUserInput[]
    set?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
    disconnect?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
    delete?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
    connect?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
    update?: SignupUpdateWithWhereUniqueWithoutUserInput | SignupUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SignupUpdateManyWithWhereWithoutUserInput | SignupUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SignupScalarWhereInput | SignupScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput> | RoleCreateWithoutUserInput[] | RoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput | RoleCreateOrConnectWithoutUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUserInput | RoleUpsertWithWhereUniqueWithoutUserInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUserInput | RoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUserInput | RoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type MarkerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MarkerCreateWithoutUserInput, MarkerUncheckedCreateWithoutUserInput> | MarkerCreateWithoutUserInput[] | MarkerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MarkerCreateOrConnectWithoutUserInput | MarkerCreateOrConnectWithoutUserInput[]
    upsert?: MarkerUpsertWithWhereUniqueWithoutUserInput | MarkerUpsertWithWhereUniqueWithoutUserInput[]
    set?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
    disconnect?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
    delete?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
    connect?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
    update?: MarkerUpdateWithWhereUniqueWithoutUserInput | MarkerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MarkerUpdateManyWithWhereWithoutUserInput | MarkerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MarkerScalarWhereInput | MarkerScalarWhereInput[]
  }

  export type EventTargetGroupsCreateNestedManyWithoutEventInput = {
    create?: XOR<EventTargetGroupsCreateWithoutEventInput, EventTargetGroupsUncheckedCreateWithoutEventInput> | EventTargetGroupsCreateWithoutEventInput[] | EventTargetGroupsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventTargetGroupsCreateOrConnectWithoutEventInput | EventTargetGroupsCreateOrConnectWithoutEventInput[]
    createMany?: EventTargetGroupsCreateManyEventInputEnvelope
    connect?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
  }

  export type SignupCreateNestedManyWithoutEventInput = {
    create?: XOR<SignupCreateWithoutEventInput, SignupUncheckedCreateWithoutEventInput> | SignupCreateWithoutEventInput[] | SignupUncheckedCreateWithoutEventInput[]
    connectOrCreate?: SignupCreateOrConnectWithoutEventInput | SignupCreateOrConnectWithoutEventInput[]
    createMany?: SignupCreateManyEventInputEnvelope
    connect?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutEventInput = {
    create?: XOR<RoleCreateWithoutEventInput, RoleUncheckedCreateWithoutEventInput> | RoleCreateWithoutEventInput[] | RoleUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutEventInput | RoleCreateOrConnectWithoutEventInput[]
    createMany?: RoleCreateManyEventInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type MarkerCreateNestedManyWithoutEventInput = {
    create?: XOR<MarkerCreateWithoutEventInput, MarkerUncheckedCreateWithoutEventInput> | MarkerCreateWithoutEventInput[] | MarkerUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MarkerCreateOrConnectWithoutEventInput | MarkerCreateOrConnectWithoutEventInput[]
    createMany?: MarkerCreateManyEventInputEnvelope
    connect?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput> | UserCreateWithoutEventsInput[] | UserUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput | UserCreateOrConnectWithoutEventsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EventTargetGroupsUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventTargetGroupsCreateWithoutEventInput, EventTargetGroupsUncheckedCreateWithoutEventInput> | EventTargetGroupsCreateWithoutEventInput[] | EventTargetGroupsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventTargetGroupsCreateOrConnectWithoutEventInput | EventTargetGroupsCreateOrConnectWithoutEventInput[]
    createMany?: EventTargetGroupsCreateManyEventInputEnvelope
    connect?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
  }

  export type SignupUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<SignupCreateWithoutEventInput, SignupUncheckedCreateWithoutEventInput> | SignupCreateWithoutEventInput[] | SignupUncheckedCreateWithoutEventInput[]
    connectOrCreate?: SignupCreateOrConnectWithoutEventInput | SignupCreateOrConnectWithoutEventInput[]
    createMany?: SignupCreateManyEventInputEnvelope
    connect?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<RoleCreateWithoutEventInput, RoleUncheckedCreateWithoutEventInput> | RoleCreateWithoutEventInput[] | RoleUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutEventInput | RoleCreateOrConnectWithoutEventInput[]
    createMany?: RoleCreateManyEventInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type MarkerUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<MarkerCreateWithoutEventInput, MarkerUncheckedCreateWithoutEventInput> | MarkerCreateWithoutEventInput[] | MarkerUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MarkerCreateOrConnectWithoutEventInput | MarkerCreateOrConnectWithoutEventInput[]
    createMany?: MarkerCreateManyEventInputEnvelope
    connect?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput> | UserCreateWithoutEventsInput[] | UserUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput | UserCreateOrConnectWithoutEventsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventTargetGroupsUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventTargetGroupsCreateWithoutEventInput, EventTargetGroupsUncheckedCreateWithoutEventInput> | EventTargetGroupsCreateWithoutEventInput[] | EventTargetGroupsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventTargetGroupsCreateOrConnectWithoutEventInput | EventTargetGroupsCreateOrConnectWithoutEventInput[]
    upsert?: EventTargetGroupsUpsertWithWhereUniqueWithoutEventInput | EventTargetGroupsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventTargetGroupsCreateManyEventInputEnvelope
    set?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
    disconnect?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
    delete?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
    connect?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
    update?: EventTargetGroupsUpdateWithWhereUniqueWithoutEventInput | EventTargetGroupsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventTargetGroupsUpdateManyWithWhereWithoutEventInput | EventTargetGroupsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventTargetGroupsScalarWhereInput | EventTargetGroupsScalarWhereInput[]
  }

  export type SignupUpdateManyWithoutEventNestedInput = {
    create?: XOR<SignupCreateWithoutEventInput, SignupUncheckedCreateWithoutEventInput> | SignupCreateWithoutEventInput[] | SignupUncheckedCreateWithoutEventInput[]
    connectOrCreate?: SignupCreateOrConnectWithoutEventInput | SignupCreateOrConnectWithoutEventInput[]
    upsert?: SignupUpsertWithWhereUniqueWithoutEventInput | SignupUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: SignupCreateManyEventInputEnvelope
    set?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
    disconnect?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
    delete?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
    connect?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
    update?: SignupUpdateWithWhereUniqueWithoutEventInput | SignupUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: SignupUpdateManyWithWhereWithoutEventInput | SignupUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: SignupScalarWhereInput | SignupScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutEventNestedInput = {
    create?: XOR<RoleCreateWithoutEventInput, RoleUncheckedCreateWithoutEventInput> | RoleCreateWithoutEventInput[] | RoleUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutEventInput | RoleCreateOrConnectWithoutEventInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutEventInput | RoleUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: RoleCreateManyEventInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutEventInput | RoleUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutEventInput | RoleUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type MarkerUpdateManyWithoutEventNestedInput = {
    create?: XOR<MarkerCreateWithoutEventInput, MarkerUncheckedCreateWithoutEventInput> | MarkerCreateWithoutEventInput[] | MarkerUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MarkerCreateOrConnectWithoutEventInput | MarkerCreateOrConnectWithoutEventInput[]
    upsert?: MarkerUpsertWithWhereUniqueWithoutEventInput | MarkerUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: MarkerCreateManyEventInputEnvelope
    set?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
    disconnect?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
    delete?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
    connect?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
    update?: MarkerUpdateWithWhereUniqueWithoutEventInput | MarkerUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: MarkerUpdateManyWithWhereWithoutEventInput | MarkerUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: MarkerScalarWhereInput | MarkerScalarWhereInput[]
  }

  export type UserUpdateManyWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput> | UserCreateWithoutEventsInput[] | UserUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput | UserCreateOrConnectWithoutEventsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEventsInput | UserUpsertWithWhereUniqueWithoutEventsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEventsInput | UserUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEventsInput | UserUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EventTargetGroupsUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventTargetGroupsCreateWithoutEventInput, EventTargetGroupsUncheckedCreateWithoutEventInput> | EventTargetGroupsCreateWithoutEventInput[] | EventTargetGroupsUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventTargetGroupsCreateOrConnectWithoutEventInput | EventTargetGroupsCreateOrConnectWithoutEventInput[]
    upsert?: EventTargetGroupsUpsertWithWhereUniqueWithoutEventInput | EventTargetGroupsUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventTargetGroupsCreateManyEventInputEnvelope
    set?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
    disconnect?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
    delete?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
    connect?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
    update?: EventTargetGroupsUpdateWithWhereUniqueWithoutEventInput | EventTargetGroupsUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventTargetGroupsUpdateManyWithWhereWithoutEventInput | EventTargetGroupsUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventTargetGroupsScalarWhereInput | EventTargetGroupsScalarWhereInput[]
  }

  export type SignupUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<SignupCreateWithoutEventInput, SignupUncheckedCreateWithoutEventInput> | SignupCreateWithoutEventInput[] | SignupUncheckedCreateWithoutEventInput[]
    connectOrCreate?: SignupCreateOrConnectWithoutEventInput | SignupCreateOrConnectWithoutEventInput[]
    upsert?: SignupUpsertWithWhereUniqueWithoutEventInput | SignupUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: SignupCreateManyEventInputEnvelope
    set?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
    disconnect?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
    delete?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
    connect?: SignupWhereUniqueInput | SignupWhereUniqueInput[]
    update?: SignupUpdateWithWhereUniqueWithoutEventInput | SignupUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: SignupUpdateManyWithWhereWithoutEventInput | SignupUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: SignupScalarWhereInput | SignupScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<RoleCreateWithoutEventInput, RoleUncheckedCreateWithoutEventInput> | RoleCreateWithoutEventInput[] | RoleUncheckedCreateWithoutEventInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutEventInput | RoleCreateOrConnectWithoutEventInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutEventInput | RoleUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: RoleCreateManyEventInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutEventInput | RoleUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutEventInput | RoleUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type MarkerUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<MarkerCreateWithoutEventInput, MarkerUncheckedCreateWithoutEventInput> | MarkerCreateWithoutEventInput[] | MarkerUncheckedCreateWithoutEventInput[]
    connectOrCreate?: MarkerCreateOrConnectWithoutEventInput | MarkerCreateOrConnectWithoutEventInput[]
    upsert?: MarkerUpsertWithWhereUniqueWithoutEventInput | MarkerUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: MarkerCreateManyEventInputEnvelope
    set?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
    disconnect?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
    delete?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
    connect?: MarkerWhereUniqueInput | MarkerWhereUniqueInput[]
    update?: MarkerUpdateWithWhereUniqueWithoutEventInput | MarkerUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: MarkerUpdateManyWithWhereWithoutEventInput | MarkerUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: MarkerScalarWhereInput | MarkerScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput> | UserCreateWithoutEventsInput[] | UserUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput | UserCreateOrConnectWithoutEventsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutEventsInput | UserUpsertWithWhereUniqueWithoutEventsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutEventsInput | UserUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutEventsInput | UserUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EventTargetGroupsCreateNestedManyWithoutTargetGroupInput = {
    create?: XOR<EventTargetGroupsCreateWithoutTargetGroupInput, EventTargetGroupsUncheckedCreateWithoutTargetGroupInput> | EventTargetGroupsCreateWithoutTargetGroupInput[] | EventTargetGroupsUncheckedCreateWithoutTargetGroupInput[]
    connectOrCreate?: EventTargetGroupsCreateOrConnectWithoutTargetGroupInput | EventTargetGroupsCreateOrConnectWithoutTargetGroupInput[]
    createMany?: EventTargetGroupsCreateManyTargetGroupInputEnvelope
    connect?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
  }

  export type EventTargetGroupsUncheckedCreateNestedManyWithoutTargetGroupInput = {
    create?: XOR<EventTargetGroupsCreateWithoutTargetGroupInput, EventTargetGroupsUncheckedCreateWithoutTargetGroupInput> | EventTargetGroupsCreateWithoutTargetGroupInput[] | EventTargetGroupsUncheckedCreateWithoutTargetGroupInput[]
    connectOrCreate?: EventTargetGroupsCreateOrConnectWithoutTargetGroupInput | EventTargetGroupsCreateOrConnectWithoutTargetGroupInput[]
    createMany?: EventTargetGroupsCreateManyTargetGroupInputEnvelope
    connect?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
  }

  export type EventTargetGroupsUpdateManyWithoutTargetGroupNestedInput = {
    create?: XOR<EventTargetGroupsCreateWithoutTargetGroupInput, EventTargetGroupsUncheckedCreateWithoutTargetGroupInput> | EventTargetGroupsCreateWithoutTargetGroupInput[] | EventTargetGroupsUncheckedCreateWithoutTargetGroupInput[]
    connectOrCreate?: EventTargetGroupsCreateOrConnectWithoutTargetGroupInput | EventTargetGroupsCreateOrConnectWithoutTargetGroupInput[]
    upsert?: EventTargetGroupsUpsertWithWhereUniqueWithoutTargetGroupInput | EventTargetGroupsUpsertWithWhereUniqueWithoutTargetGroupInput[]
    createMany?: EventTargetGroupsCreateManyTargetGroupInputEnvelope
    set?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
    disconnect?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
    delete?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
    connect?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
    update?: EventTargetGroupsUpdateWithWhereUniqueWithoutTargetGroupInput | EventTargetGroupsUpdateWithWhereUniqueWithoutTargetGroupInput[]
    updateMany?: EventTargetGroupsUpdateManyWithWhereWithoutTargetGroupInput | EventTargetGroupsUpdateManyWithWhereWithoutTargetGroupInput[]
    deleteMany?: EventTargetGroupsScalarWhereInput | EventTargetGroupsScalarWhereInput[]
  }

  export type EventTargetGroupsUncheckedUpdateManyWithoutTargetGroupNestedInput = {
    create?: XOR<EventTargetGroupsCreateWithoutTargetGroupInput, EventTargetGroupsUncheckedCreateWithoutTargetGroupInput> | EventTargetGroupsCreateWithoutTargetGroupInput[] | EventTargetGroupsUncheckedCreateWithoutTargetGroupInput[]
    connectOrCreate?: EventTargetGroupsCreateOrConnectWithoutTargetGroupInput | EventTargetGroupsCreateOrConnectWithoutTargetGroupInput[]
    upsert?: EventTargetGroupsUpsertWithWhereUniqueWithoutTargetGroupInput | EventTargetGroupsUpsertWithWhereUniqueWithoutTargetGroupInput[]
    createMany?: EventTargetGroupsCreateManyTargetGroupInputEnvelope
    set?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
    disconnect?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
    delete?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
    connect?: EventTargetGroupsWhereUniqueInput | EventTargetGroupsWhereUniqueInput[]
    update?: EventTargetGroupsUpdateWithWhereUniqueWithoutTargetGroupInput | EventTargetGroupsUpdateWithWhereUniqueWithoutTargetGroupInput[]
    updateMany?: EventTargetGroupsUpdateManyWithWhereWithoutTargetGroupInput | EventTargetGroupsUpdateManyWithWhereWithoutTargetGroupInput[]
    deleteMany?: EventTargetGroupsScalarWhereInput | EventTargetGroupsScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutTargetGroupsInput = {
    create?: XOR<EventCreateWithoutTargetGroupsInput, EventUncheckedCreateWithoutTargetGroupsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTargetGroupsInput
    connect?: EventWhereUniqueInput
  }

  export type TargetGroupCreateNestedOneWithoutEventsInput = {
    create?: XOR<TargetGroupCreateWithoutEventsInput, TargetGroupUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TargetGroupCreateOrConnectWithoutEventsInput
    connect?: TargetGroupWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutTargetGroupsNestedInput = {
    create?: XOR<EventCreateWithoutTargetGroupsInput, EventUncheckedCreateWithoutTargetGroupsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTargetGroupsInput
    upsert?: EventUpsertWithoutTargetGroupsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTargetGroupsInput, EventUpdateWithoutTargetGroupsInput>, EventUncheckedUpdateWithoutTargetGroupsInput>
  }

  export type TargetGroupUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<TargetGroupCreateWithoutEventsInput, TargetGroupUncheckedCreateWithoutEventsInput>
    connectOrCreate?: TargetGroupCreateOrConnectWithoutEventsInput
    upsert?: TargetGroupUpsertWithoutEventsInput
    connect?: TargetGroupWhereUniqueInput
    update?: XOR<XOR<TargetGroupUpdateToOneWithWhereWithoutEventsInput, TargetGroupUpdateWithoutEventsInput>, TargetGroupUncheckedUpdateWithoutEventsInput>
  }

  export type EventCreateNestedOneWithoutSignupsInput = {
    create?: XOR<EventCreateWithoutSignupsInput, EventUncheckedCreateWithoutSignupsInput>
    connectOrCreate?: EventCreateOrConnectWithoutSignupsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutSignupsInput = {
    create?: XOR<UserCreateWithoutSignupsInput, UserUncheckedCreateWithoutSignupsInput> | UserCreateWithoutSignupsInput[] | UserUncheckedCreateWithoutSignupsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSignupsInput | UserCreateOrConnectWithoutSignupsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSignupsInput = {
    create?: XOR<UserCreateWithoutSignupsInput, UserUncheckedCreateWithoutSignupsInput> | UserCreateWithoutSignupsInput[] | UserUncheckedCreateWithoutSignupsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSignupsInput | UserCreateOrConnectWithoutSignupsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUpdateOneRequiredWithoutSignupsNestedInput = {
    create?: XOR<EventCreateWithoutSignupsInput, EventUncheckedCreateWithoutSignupsInput>
    connectOrCreate?: EventCreateOrConnectWithoutSignupsInput
    upsert?: EventUpsertWithoutSignupsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutSignupsInput, EventUpdateWithoutSignupsInput>, EventUncheckedUpdateWithoutSignupsInput>
  }

  export type UserUpdateManyWithoutSignupsNestedInput = {
    create?: XOR<UserCreateWithoutSignupsInput, UserUncheckedCreateWithoutSignupsInput> | UserCreateWithoutSignupsInput[] | UserUncheckedCreateWithoutSignupsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSignupsInput | UserCreateOrConnectWithoutSignupsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSignupsInput | UserUpsertWithWhereUniqueWithoutSignupsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSignupsInput | UserUpdateWithWhereUniqueWithoutSignupsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSignupsInput | UserUpdateManyWithWhereWithoutSignupsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSignupsNestedInput = {
    create?: XOR<UserCreateWithoutSignupsInput, UserUncheckedCreateWithoutSignupsInput> | UserCreateWithoutSignupsInput[] | UserUncheckedCreateWithoutSignupsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSignupsInput | UserCreateOrConnectWithoutSignupsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSignupsInput | UserUpsertWithWhereUniqueWithoutSignupsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSignupsInput | UserUpdateWithWhereUniqueWithoutSignupsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSignupsInput | UserUpdateManyWithWhereWithoutSignupsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutRolesInput = {
    create?: XOR<EventCreateWithoutRolesInput, EventUncheckedCreateWithoutRolesInput>
    connectOrCreate?: EventCreateOrConnectWithoutRolesInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<EventCreateWithoutRolesInput, EventUncheckedCreateWithoutRolesInput>
    connectOrCreate?: EventCreateOrConnectWithoutRolesInput
    upsert?: EventUpsertWithoutRolesInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutRolesInput, EventUpdateWithoutRolesInput>, EventUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EventCreateWithoutMarkerInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    date: Date | string
    location: string
    latitude?: number | null
    longitude?: number | null
    image?: string | null
    createdAt?: Date | string
    organizerId: string
    targetGroups?: EventTargetGroupsCreateNestedManyWithoutEventInput
    signups?: SignupCreateNestedManyWithoutEventInput
    roles?: RoleCreateNestedManyWithoutEventInput
    User?: UserCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutMarkerInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    date: Date | string
    location: string
    latitude?: number | null
    longitude?: number | null
    image?: string | null
    createdAt?: Date | string
    organizerId: string
    targetGroups?: EventTargetGroupsUncheckedCreateNestedManyWithoutEventInput
    signups?: SignupUncheckedCreateNestedManyWithoutEventInput
    roles?: RoleUncheckedCreateNestedManyWithoutEventInput
    User?: UserUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventCreateOrConnectWithoutMarkerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutMarkerInput, EventUncheckedCreateWithoutMarkerInput>
  }

  export type UserCreateWithoutMarkersInput = {
    id?: string
    userId: string
    name?: string | null
    email: string
    imageUrl?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    birthdate?: Date | string | null
    gender?: string | null
    website?: string | null
    facebook?: string | null
    instagram?: string | null
    twitter?: string | null
    linkedin?: string | null
    interests?: UserCreateinterestsInput | string[]
    languages?: UserCreatelanguagesInput | string[]
    isPublic?: boolean
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutUserInput
    signups?: SignupCreateNestedManyWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMarkersInput = {
    id?: string
    userId: string
    name?: string | null
    email: string
    imageUrl?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    birthdate?: Date | string | null
    gender?: string | null
    website?: string | null
    facebook?: string | null
    instagram?: string | null
    twitter?: string | null
    linkedin?: string | null
    interests?: UserCreateinterestsInput | string[]
    languages?: UserCreatelanguagesInput | string[]
    isPublic?: boolean
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    signups?: SignupUncheckedCreateNestedManyWithoutUserInput
    roles?: RoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMarkersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMarkersInput, UserUncheckedCreateWithoutMarkersInput>
  }

  export type EventUpsertWithoutMarkerInput = {
    update: XOR<EventUpdateWithoutMarkerInput, EventUncheckedUpdateWithoutMarkerInput>
    create: XOR<EventCreateWithoutMarkerInput, EventUncheckedCreateWithoutMarkerInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutMarkerInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutMarkerInput, EventUncheckedUpdateWithoutMarkerInput>
  }

  export type EventUpdateWithoutMarkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
    targetGroups?: EventTargetGroupsUpdateManyWithoutEventNestedInput
    signups?: SignupUpdateManyWithoutEventNestedInput
    roles?: RoleUpdateManyWithoutEventNestedInput
    User?: UserUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutMarkerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
    targetGroups?: EventTargetGroupsUncheckedUpdateManyWithoutEventNestedInput
    signups?: SignupUncheckedUpdateManyWithoutEventNestedInput
    roles?: RoleUncheckedUpdateManyWithoutEventNestedInput
    User?: UserUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutMarkersInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutMarkersInput, UserUncheckedUpdateWithoutMarkersInput>
    create: XOR<UserCreateWithoutMarkersInput, UserUncheckedCreateWithoutMarkersInput>
  }

  export type UserUpdateWithWhereUniqueWithoutMarkersInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutMarkersInput, UserUncheckedUpdateWithoutMarkersInput>
  }

  export type UserUpdateManyWithWhereWithoutMarkersInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutMarkersInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    userId?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    location?: StringNullableFilter<"User"> | string | null
    birthdate?: DateTimeNullableFilter<"User"> | Date | string | null
    gender?: StringNullableFilter<"User"> | string | null
    website?: StringNullableFilter<"User"> | string | null
    facebook?: StringNullableFilter<"User"> | string | null
    instagram?: StringNullableFilter<"User"> | string | null
    twitter?: StringNullableFilter<"User"> | string | null
    linkedin?: StringNullableFilter<"User"> | string | null
    interests?: StringNullableListFilter<"User">
    languages?: StringNullableListFilter<"User">
    isPublic?: BoolFilter<"User"> | boolean
    lastActiveAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type EventCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    date: Date | string
    location: string
    latitude?: number | null
    longitude?: number | null
    image?: string | null
    createdAt?: Date | string
    organizerId: string
    targetGroups?: EventTargetGroupsCreateNestedManyWithoutEventInput
    signups?: SignupCreateNestedManyWithoutEventInput
    roles?: RoleCreateNestedManyWithoutEventInput
    Marker?: MarkerCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    date: Date | string
    location: string
    latitude?: number | null
    longitude?: number | null
    image?: string | null
    createdAt?: Date | string
    organizerId: string
    targetGroups?: EventTargetGroupsUncheckedCreateNestedManyWithoutEventInput
    signups?: SignupUncheckedCreateNestedManyWithoutEventInput
    roles?: RoleUncheckedCreateNestedManyWithoutEventInput
    Marker?: MarkerUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutUserInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type SignupCreateWithoutUserInput = {
    id?: string
    userId: string
    age?: number | null
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutSignupsInput
  }

  export type SignupUncheckedCreateWithoutUserInput = {
    id?: string
    userId: string
    eventId: string
    age?: number | null
    createdAt?: Date | string
  }

  export type SignupCreateOrConnectWithoutUserInput = {
    where: SignupWhereUniqueInput
    create: XOR<SignupCreateWithoutUserInput, SignupUncheckedCreateWithoutUserInput>
  }

  export type RoleCreateWithoutUserInput = {
    id?: string
    userId: string
    role: string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutUserInput = {
    id?: string
    userId: string
    eventId: string
    role: string
    createdAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
  }

  export type MarkerCreateWithoutUserInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    latitude: number
    longitude: number
    type: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    event?: EventCreateNestedOneWithoutMarkerInput
  }

  export type MarkerUncheckedCreateWithoutUserInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    latitude: number
    longitude: number
    type: string
    icon?: string | null
    eventId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MarkerCreateOrConnectWithoutUserInput = {
    where: MarkerWhereUniqueInput
    create: XOR<MarkerCreateWithoutUserInput, MarkerUncheckedCreateWithoutUserInput>
  }

  export type EventUpsertWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventUpdateWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
  }

  export type EventUpdateManyWithWhereWithoutUserInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutUserInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    type?: StringFilter<"Event"> | string
    date?: DateTimeFilter<"Event"> | Date | string
    location?: StringFilter<"Event"> | string
    latitude?: FloatNullableFilter<"Event"> | number | null
    longitude?: FloatNullableFilter<"Event"> | number | null
    image?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    organizerId?: StringFilter<"Event"> | string
  }

  export type SignupUpsertWithWhereUniqueWithoutUserInput = {
    where: SignupWhereUniqueInput
    update: XOR<SignupUpdateWithoutUserInput, SignupUncheckedUpdateWithoutUserInput>
    create: XOR<SignupCreateWithoutUserInput, SignupUncheckedCreateWithoutUserInput>
  }

  export type SignupUpdateWithWhereUniqueWithoutUserInput = {
    where: SignupWhereUniqueInput
    data: XOR<SignupUpdateWithoutUserInput, SignupUncheckedUpdateWithoutUserInput>
  }

  export type SignupUpdateManyWithWhereWithoutUserInput = {
    where: SignupScalarWhereInput
    data: XOR<SignupUpdateManyMutationInput, SignupUncheckedUpdateManyWithoutUserInput>
  }

  export type SignupScalarWhereInput = {
    AND?: SignupScalarWhereInput | SignupScalarWhereInput[]
    OR?: SignupScalarWhereInput[]
    NOT?: SignupScalarWhereInput | SignupScalarWhereInput[]
    id?: StringFilter<"Signup"> | string
    userId?: StringFilter<"Signup"> | string
    eventId?: StringFilter<"Signup"> | string
    age?: IntNullableFilter<"Signup"> | number | null
    createdAt?: DateTimeFilter<"Signup"> | Date | string
  }

  export type RoleUpsertWithWhereUniqueWithoutUserInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutUserInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateManyWithWhereWithoutUserInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutUserInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: StringFilter<"Role"> | string
    userId?: StringFilter<"Role"> | string
    eventId?: StringFilter<"Role"> | string
    role?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
  }

  export type MarkerUpsertWithWhereUniqueWithoutUserInput = {
    where: MarkerWhereUniqueInput
    update: XOR<MarkerUpdateWithoutUserInput, MarkerUncheckedUpdateWithoutUserInput>
    create: XOR<MarkerCreateWithoutUserInput, MarkerUncheckedCreateWithoutUserInput>
  }

  export type MarkerUpdateWithWhereUniqueWithoutUserInput = {
    where: MarkerWhereUniqueInput
    data: XOR<MarkerUpdateWithoutUserInput, MarkerUncheckedUpdateWithoutUserInput>
  }

  export type MarkerUpdateManyWithWhereWithoutUserInput = {
    where: MarkerScalarWhereInput
    data: XOR<MarkerUpdateManyMutationInput, MarkerUncheckedUpdateManyWithoutUserInput>
  }

  export type MarkerScalarWhereInput = {
    AND?: MarkerScalarWhereInput | MarkerScalarWhereInput[]
    OR?: MarkerScalarWhereInput[]
    NOT?: MarkerScalarWhereInput | MarkerScalarWhereInput[]
    id?: StringFilter<"Marker"> | string
    userId?: StringFilter<"Marker"> | string
    title?: StringFilter<"Marker"> | string
    description?: StringNullableFilter<"Marker"> | string | null
    latitude?: FloatFilter<"Marker"> | number
    longitude?: FloatFilter<"Marker"> | number
    type?: StringFilter<"Marker"> | string
    icon?: StringNullableFilter<"Marker"> | string | null
    eventId?: StringNullableFilter<"Marker"> | string | null
    createdAt?: DateTimeFilter<"Marker"> | Date | string
    updatedAt?: DateTimeFilter<"Marker"> | Date | string
  }

  export type EventTargetGroupsCreateWithoutEventInput = {
    targetGroup: TargetGroupCreateNestedOneWithoutEventsInput
  }

  export type EventTargetGroupsUncheckedCreateWithoutEventInput = {
    targetGroupId: string
  }

  export type EventTargetGroupsCreateOrConnectWithoutEventInput = {
    where: EventTargetGroupsWhereUniqueInput
    create: XOR<EventTargetGroupsCreateWithoutEventInput, EventTargetGroupsUncheckedCreateWithoutEventInput>
  }

  export type EventTargetGroupsCreateManyEventInputEnvelope = {
    data: EventTargetGroupsCreateManyEventInput | EventTargetGroupsCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type SignupCreateWithoutEventInput = {
    id?: string
    userId: string
    age?: number | null
    createdAt?: Date | string
    User?: UserCreateNestedManyWithoutSignupsInput
  }

  export type SignupUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    age?: number | null
    createdAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutSignupsInput
  }

  export type SignupCreateOrConnectWithoutEventInput = {
    where: SignupWhereUniqueInput
    create: XOR<SignupCreateWithoutEventInput, SignupUncheckedCreateWithoutEventInput>
  }

  export type SignupCreateManyEventInputEnvelope = {
    data: SignupCreateManyEventInput | SignupCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutEventInput = {
    id?: string
    userId: string
    role: string
    createdAt?: Date | string
    User?: UserCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    role: string
    createdAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleCreateOrConnectWithoutEventInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutEventInput, RoleUncheckedCreateWithoutEventInput>
  }

  export type RoleCreateManyEventInputEnvelope = {
    data: RoleCreateManyEventInput | RoleCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type MarkerCreateWithoutEventInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    latitude: number
    longitude: number
    type: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedManyWithoutMarkersInput
  }

  export type MarkerUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    latitude: number
    longitude: number
    type: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserUncheckedCreateNestedManyWithoutMarkersInput
  }

  export type MarkerCreateOrConnectWithoutEventInput = {
    where: MarkerWhereUniqueInput
    create: XOR<MarkerCreateWithoutEventInput, MarkerUncheckedCreateWithoutEventInput>
  }

  export type MarkerCreateManyEventInputEnvelope = {
    data: MarkerCreateManyEventInput | MarkerCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutEventsInput = {
    id?: string
    userId: string
    name?: string | null
    email: string
    imageUrl?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    birthdate?: Date | string | null
    gender?: string | null
    website?: string | null
    facebook?: string | null
    instagram?: string | null
    twitter?: string | null
    linkedin?: string | null
    interests?: UserCreateinterestsInput | string[]
    languages?: UserCreatelanguagesInput | string[]
    isPublic?: boolean
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signups?: SignupCreateNestedManyWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUserInput
    markers?: MarkerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: string
    userId: string
    name?: string | null
    email: string
    imageUrl?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    birthdate?: Date | string | null
    gender?: string | null
    website?: string | null
    facebook?: string | null
    instagram?: string | null
    twitter?: string | null
    linkedin?: string | null
    interests?: UserCreateinterestsInput | string[]
    languages?: UserCreatelanguagesInput | string[]
    isPublic?: boolean
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    signups?: SignupUncheckedCreateNestedManyWithoutUserInput
    roles?: RoleUncheckedCreateNestedManyWithoutUserInput
    markers?: MarkerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type EventTargetGroupsUpsertWithWhereUniqueWithoutEventInput = {
    where: EventTargetGroupsWhereUniqueInput
    update: XOR<EventTargetGroupsUpdateWithoutEventInput, EventTargetGroupsUncheckedUpdateWithoutEventInput>
    create: XOR<EventTargetGroupsCreateWithoutEventInput, EventTargetGroupsUncheckedCreateWithoutEventInput>
  }

  export type EventTargetGroupsUpdateWithWhereUniqueWithoutEventInput = {
    where: EventTargetGroupsWhereUniqueInput
    data: XOR<EventTargetGroupsUpdateWithoutEventInput, EventTargetGroupsUncheckedUpdateWithoutEventInput>
  }

  export type EventTargetGroupsUpdateManyWithWhereWithoutEventInput = {
    where: EventTargetGroupsScalarWhereInput
    data: XOR<EventTargetGroupsUpdateManyMutationInput, EventTargetGroupsUncheckedUpdateManyWithoutEventInput>
  }

  export type EventTargetGroupsScalarWhereInput = {
    AND?: EventTargetGroupsScalarWhereInput | EventTargetGroupsScalarWhereInput[]
    OR?: EventTargetGroupsScalarWhereInput[]
    NOT?: EventTargetGroupsScalarWhereInput | EventTargetGroupsScalarWhereInput[]
    eventId?: StringFilter<"EventTargetGroups"> | string
    targetGroupId?: StringFilter<"EventTargetGroups"> | string
  }

  export type SignupUpsertWithWhereUniqueWithoutEventInput = {
    where: SignupWhereUniqueInput
    update: XOR<SignupUpdateWithoutEventInput, SignupUncheckedUpdateWithoutEventInput>
    create: XOR<SignupCreateWithoutEventInput, SignupUncheckedCreateWithoutEventInput>
  }

  export type SignupUpdateWithWhereUniqueWithoutEventInput = {
    where: SignupWhereUniqueInput
    data: XOR<SignupUpdateWithoutEventInput, SignupUncheckedUpdateWithoutEventInput>
  }

  export type SignupUpdateManyWithWhereWithoutEventInput = {
    where: SignupScalarWhereInput
    data: XOR<SignupUpdateManyMutationInput, SignupUncheckedUpdateManyWithoutEventInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutEventInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutEventInput, RoleUncheckedUpdateWithoutEventInput>
    create: XOR<RoleCreateWithoutEventInput, RoleUncheckedCreateWithoutEventInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutEventInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutEventInput, RoleUncheckedUpdateWithoutEventInput>
  }

  export type RoleUpdateManyWithWhereWithoutEventInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutEventInput>
  }

  export type MarkerUpsertWithWhereUniqueWithoutEventInput = {
    where: MarkerWhereUniqueInput
    update: XOR<MarkerUpdateWithoutEventInput, MarkerUncheckedUpdateWithoutEventInput>
    create: XOR<MarkerCreateWithoutEventInput, MarkerUncheckedCreateWithoutEventInput>
  }

  export type MarkerUpdateWithWhereUniqueWithoutEventInput = {
    where: MarkerWhereUniqueInput
    data: XOR<MarkerUpdateWithoutEventInput, MarkerUncheckedUpdateWithoutEventInput>
  }

  export type MarkerUpdateManyWithWhereWithoutEventInput = {
    where: MarkerScalarWhereInput
    data: XOR<MarkerUpdateManyMutationInput, MarkerUncheckedUpdateManyWithoutEventInput>
  }

  export type UserUpsertWithWhereUniqueWithoutEventsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutEventsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateManyWithWhereWithoutEventsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutEventsInput>
  }

  export type EventTargetGroupsCreateWithoutTargetGroupInput = {
    event: EventCreateNestedOneWithoutTargetGroupsInput
  }

  export type EventTargetGroupsUncheckedCreateWithoutTargetGroupInput = {
    eventId: string
  }

  export type EventTargetGroupsCreateOrConnectWithoutTargetGroupInput = {
    where: EventTargetGroupsWhereUniqueInput
    create: XOR<EventTargetGroupsCreateWithoutTargetGroupInput, EventTargetGroupsUncheckedCreateWithoutTargetGroupInput>
  }

  export type EventTargetGroupsCreateManyTargetGroupInputEnvelope = {
    data: EventTargetGroupsCreateManyTargetGroupInput | EventTargetGroupsCreateManyTargetGroupInput[]
    skipDuplicates?: boolean
  }

  export type EventTargetGroupsUpsertWithWhereUniqueWithoutTargetGroupInput = {
    where: EventTargetGroupsWhereUniqueInput
    update: XOR<EventTargetGroupsUpdateWithoutTargetGroupInput, EventTargetGroupsUncheckedUpdateWithoutTargetGroupInput>
    create: XOR<EventTargetGroupsCreateWithoutTargetGroupInput, EventTargetGroupsUncheckedCreateWithoutTargetGroupInput>
  }

  export type EventTargetGroupsUpdateWithWhereUniqueWithoutTargetGroupInput = {
    where: EventTargetGroupsWhereUniqueInput
    data: XOR<EventTargetGroupsUpdateWithoutTargetGroupInput, EventTargetGroupsUncheckedUpdateWithoutTargetGroupInput>
  }

  export type EventTargetGroupsUpdateManyWithWhereWithoutTargetGroupInput = {
    where: EventTargetGroupsScalarWhereInput
    data: XOR<EventTargetGroupsUpdateManyMutationInput, EventTargetGroupsUncheckedUpdateManyWithoutTargetGroupInput>
  }

  export type EventCreateWithoutTargetGroupsInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    date: Date | string
    location: string
    latitude?: number | null
    longitude?: number | null
    image?: string | null
    createdAt?: Date | string
    organizerId: string
    signups?: SignupCreateNestedManyWithoutEventInput
    roles?: RoleCreateNestedManyWithoutEventInput
    Marker?: MarkerCreateNestedManyWithoutEventInput
    User?: UserCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutTargetGroupsInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    date: Date | string
    location: string
    latitude?: number | null
    longitude?: number | null
    image?: string | null
    createdAt?: Date | string
    organizerId: string
    signups?: SignupUncheckedCreateNestedManyWithoutEventInput
    roles?: RoleUncheckedCreateNestedManyWithoutEventInput
    Marker?: MarkerUncheckedCreateNestedManyWithoutEventInput
    User?: UserUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventCreateOrConnectWithoutTargetGroupsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTargetGroupsInput, EventUncheckedCreateWithoutTargetGroupsInput>
  }

  export type TargetGroupCreateWithoutEventsInput = {
    id?: string
    name: string
  }

  export type TargetGroupUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
  }

  export type TargetGroupCreateOrConnectWithoutEventsInput = {
    where: TargetGroupWhereUniqueInput
    create: XOR<TargetGroupCreateWithoutEventsInput, TargetGroupUncheckedCreateWithoutEventsInput>
  }

  export type EventUpsertWithoutTargetGroupsInput = {
    update: XOR<EventUpdateWithoutTargetGroupsInput, EventUncheckedUpdateWithoutTargetGroupsInput>
    create: XOR<EventCreateWithoutTargetGroupsInput, EventUncheckedCreateWithoutTargetGroupsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTargetGroupsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTargetGroupsInput, EventUncheckedUpdateWithoutTargetGroupsInput>
  }

  export type EventUpdateWithoutTargetGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
    signups?: SignupUpdateManyWithoutEventNestedInput
    roles?: RoleUpdateManyWithoutEventNestedInput
    Marker?: MarkerUpdateManyWithoutEventNestedInput
    User?: UserUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutTargetGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
    signups?: SignupUncheckedUpdateManyWithoutEventNestedInput
    roles?: RoleUncheckedUpdateManyWithoutEventNestedInput
    Marker?: MarkerUncheckedUpdateManyWithoutEventNestedInput
    User?: UserUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type TargetGroupUpsertWithoutEventsInput = {
    update: XOR<TargetGroupUpdateWithoutEventsInput, TargetGroupUncheckedUpdateWithoutEventsInput>
    create: XOR<TargetGroupCreateWithoutEventsInput, TargetGroupUncheckedCreateWithoutEventsInput>
    where?: TargetGroupWhereInput
  }

  export type TargetGroupUpdateToOneWithWhereWithoutEventsInput = {
    where?: TargetGroupWhereInput
    data: XOR<TargetGroupUpdateWithoutEventsInput, TargetGroupUncheckedUpdateWithoutEventsInput>
  }

  export type TargetGroupUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TargetGroupUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateWithoutSignupsInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    date: Date | string
    location: string
    latitude?: number | null
    longitude?: number | null
    image?: string | null
    createdAt?: Date | string
    organizerId: string
    targetGroups?: EventTargetGroupsCreateNestedManyWithoutEventInput
    roles?: RoleCreateNestedManyWithoutEventInput
    Marker?: MarkerCreateNestedManyWithoutEventInput
    User?: UserCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutSignupsInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    date: Date | string
    location: string
    latitude?: number | null
    longitude?: number | null
    image?: string | null
    createdAt?: Date | string
    organizerId: string
    targetGroups?: EventTargetGroupsUncheckedCreateNestedManyWithoutEventInput
    roles?: RoleUncheckedCreateNestedManyWithoutEventInput
    Marker?: MarkerUncheckedCreateNestedManyWithoutEventInput
    User?: UserUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventCreateOrConnectWithoutSignupsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutSignupsInput, EventUncheckedCreateWithoutSignupsInput>
  }

  export type UserCreateWithoutSignupsInput = {
    id?: string
    userId: string
    name?: string | null
    email: string
    imageUrl?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    birthdate?: Date | string | null
    gender?: string | null
    website?: string | null
    facebook?: string | null
    instagram?: string | null
    twitter?: string | null
    linkedin?: string | null
    interests?: UserCreateinterestsInput | string[]
    languages?: UserCreatelanguagesInput | string[]
    isPublic?: boolean
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUserInput
    markers?: MarkerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSignupsInput = {
    id?: string
    userId: string
    name?: string | null
    email: string
    imageUrl?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    birthdate?: Date | string | null
    gender?: string | null
    website?: string | null
    facebook?: string | null
    instagram?: string | null
    twitter?: string | null
    linkedin?: string | null
    interests?: UserCreateinterestsInput | string[]
    languages?: UserCreatelanguagesInput | string[]
    isPublic?: boolean
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    roles?: RoleUncheckedCreateNestedManyWithoutUserInput
    markers?: MarkerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSignupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSignupsInput, UserUncheckedCreateWithoutSignupsInput>
  }

  export type EventUpsertWithoutSignupsInput = {
    update: XOR<EventUpdateWithoutSignupsInput, EventUncheckedUpdateWithoutSignupsInput>
    create: XOR<EventCreateWithoutSignupsInput, EventUncheckedCreateWithoutSignupsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutSignupsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutSignupsInput, EventUncheckedUpdateWithoutSignupsInput>
  }

  export type EventUpdateWithoutSignupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
    targetGroups?: EventTargetGroupsUpdateManyWithoutEventNestedInput
    roles?: RoleUpdateManyWithoutEventNestedInput
    Marker?: MarkerUpdateManyWithoutEventNestedInput
    User?: UserUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutSignupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
    targetGroups?: EventTargetGroupsUncheckedUpdateManyWithoutEventNestedInput
    roles?: RoleUncheckedUpdateManyWithoutEventNestedInput
    Marker?: MarkerUncheckedUpdateManyWithoutEventNestedInput
    User?: UserUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutSignupsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSignupsInput, UserUncheckedUpdateWithoutSignupsInput>
    create: XOR<UserCreateWithoutSignupsInput, UserUncheckedCreateWithoutSignupsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSignupsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSignupsInput, UserUncheckedUpdateWithoutSignupsInput>
  }

  export type UserUpdateManyWithWhereWithoutSignupsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSignupsInput>
  }

  export type EventCreateWithoutRolesInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    date: Date | string
    location: string
    latitude?: number | null
    longitude?: number | null
    image?: string | null
    createdAt?: Date | string
    organizerId: string
    targetGroups?: EventTargetGroupsCreateNestedManyWithoutEventInput
    signups?: SignupCreateNestedManyWithoutEventInput
    Marker?: MarkerCreateNestedManyWithoutEventInput
    User?: UserCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutRolesInput = {
    id?: string
    title: string
    description?: string | null
    type: string
    date: Date | string
    location: string
    latitude?: number | null
    longitude?: number | null
    image?: string | null
    createdAt?: Date | string
    organizerId: string
    targetGroups?: EventTargetGroupsUncheckedCreateNestedManyWithoutEventInput
    signups?: SignupUncheckedCreateNestedManyWithoutEventInput
    Marker?: MarkerUncheckedCreateNestedManyWithoutEventInput
    User?: UserUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventCreateOrConnectWithoutRolesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutRolesInput, EventUncheckedCreateWithoutRolesInput>
  }

  export type UserCreateWithoutRolesInput = {
    id?: string
    userId: string
    name?: string | null
    email: string
    imageUrl?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    birthdate?: Date | string | null
    gender?: string | null
    website?: string | null
    facebook?: string | null
    instagram?: string | null
    twitter?: string | null
    linkedin?: string | null
    interests?: UserCreateinterestsInput | string[]
    languages?: UserCreatelanguagesInput | string[]
    isPublic?: boolean
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventCreateNestedManyWithoutUserInput
    signups?: SignupCreateNestedManyWithoutUserInput
    markers?: MarkerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: string
    userId: string
    name?: string | null
    email: string
    imageUrl?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    birthdate?: Date | string | null
    gender?: string | null
    website?: string | null
    facebook?: string | null
    instagram?: string | null
    twitter?: string | null
    linkedin?: string | null
    interests?: UserCreateinterestsInput | string[]
    languages?: UserCreatelanguagesInput | string[]
    isPublic?: boolean
    lastActiveAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: EventUncheckedCreateNestedManyWithoutUserInput
    signups?: SignupUncheckedCreateNestedManyWithoutUserInput
    markers?: MarkerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type EventUpsertWithoutRolesInput = {
    update: XOR<EventUpdateWithoutRolesInput, EventUncheckedUpdateWithoutRolesInput>
    create: XOR<EventCreateWithoutRolesInput, EventUncheckedCreateWithoutRolesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutRolesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutRolesInput, EventUncheckedUpdateWithoutRolesInput>
  }

  export type EventUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
    targetGroups?: EventTargetGroupsUpdateManyWithoutEventNestedInput
    signups?: SignupUpdateManyWithoutEventNestedInput
    Marker?: MarkerUpdateManyWithoutEventNestedInput
    User?: UserUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
    targetGroups?: EventTargetGroupsUncheckedUpdateManyWithoutEventNestedInput
    signups?: SignupUncheckedUpdateManyWithoutEventNestedInput
    Marker?: MarkerUncheckedUpdateManyWithoutEventNestedInput
    User?: UserUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRolesInput>
  }

  export type UserUpdateWithoutMarkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    languages?: UserUpdatelanguagesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutUserNestedInput
    signups?: SignupUpdateManyWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMarkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    languages?: UserUpdatelanguagesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    signups?: SignupUncheckedUpdateManyWithoutUserNestedInput
    roles?: RoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutMarkersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    languages?: UserUpdatelanguagesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
    targetGroups?: EventTargetGroupsUpdateManyWithoutEventNestedInput
    signups?: SignupUpdateManyWithoutEventNestedInput
    roles?: RoleUpdateManyWithoutEventNestedInput
    Marker?: MarkerUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
    targetGroups?: EventTargetGroupsUncheckedUpdateManyWithoutEventNestedInput
    signups?: SignupUncheckedUpdateManyWithoutEventNestedInput
    roles?: RoleUncheckedUpdateManyWithoutEventNestedInput
    Marker?: MarkerUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizerId?: StringFieldUpdateOperationsInput | string
  }

  export type SignupUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutSignupsNestedInput
  }

  export type SignupUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignupUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarkerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneWithoutMarkerNestedInput
  }

  export type MarkerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarkerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTargetGroupsCreateManyEventInput = {
    targetGroupId: string
  }

  export type SignupCreateManyEventInput = {
    id?: string
    userId: string
    age?: number | null
    createdAt?: Date | string
  }

  export type RoleCreateManyEventInput = {
    id?: string
    userId: string
    role: string
    createdAt?: Date | string
  }

  export type MarkerCreateManyEventInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    latitude: number
    longitude: number
    type: string
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTargetGroupsUpdateWithoutEventInput = {
    targetGroup?: TargetGroupUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventTargetGroupsUncheckedUpdateWithoutEventInput = {
    targetGroupId?: StringFieldUpdateOperationsInput | string
  }

  export type EventTargetGroupsUncheckedUpdateManyWithoutEventInput = {
    targetGroupId?: StringFieldUpdateOperationsInput | string
  }

  export type SignupUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutSignupsNestedInput
  }

  export type SignupUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutSignupsNestedInput
  }

  export type SignupUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    age?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarkerUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateManyWithoutMarkersNestedInput
  }

  export type MarkerUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUncheckedUpdateManyWithoutMarkersNestedInput
  }

  export type MarkerUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    languages?: UserUpdatelanguagesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signups?: SignupUpdateManyWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUserNestedInput
    markers?: MarkerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    languages?: UserUpdatelanguagesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    signups?: SignupUncheckedUpdateManyWithoutUserNestedInput
    roles?: RoleUncheckedUpdateManyWithoutUserNestedInput
    markers?: MarkerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    languages?: UserUpdatelanguagesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTargetGroupsCreateManyTargetGroupInput = {
    eventId: string
  }

  export type EventTargetGroupsUpdateWithoutTargetGroupInput = {
    event?: EventUpdateOneRequiredWithoutTargetGroupsNestedInput
  }

  export type EventTargetGroupsUncheckedUpdateWithoutTargetGroupInput = {
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type EventTargetGroupsUncheckedUpdateManyWithoutTargetGroupInput = {
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpdateWithoutSignupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    languages?: UserUpdatelanguagesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUserNestedInput
    markers?: MarkerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSignupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    languages?: UserUpdatelanguagesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    roles?: RoleUncheckedUpdateManyWithoutUserNestedInput
    markers?: MarkerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSignupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    languages?: UserUpdatelanguagesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    languages?: UserUpdatelanguagesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUpdateManyWithoutUserNestedInput
    signups?: SignupUpdateManyWithoutUserNestedInput
    markers?: MarkerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    languages?: UserUpdatelanguagesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: EventUncheckedUpdateManyWithoutUserNestedInput
    signups?: SignupUncheckedUpdateManyWithoutUserNestedInput
    markers?: MarkerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    facebook?: NullableStringFieldUpdateOperationsInput | string | null
    instagram?: NullableStringFieldUpdateOperationsInput | string | null
    twitter?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: UserUpdateinterestsInput | string[]
    languages?: UserUpdatelanguagesInput | string[]
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    lastActiveAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
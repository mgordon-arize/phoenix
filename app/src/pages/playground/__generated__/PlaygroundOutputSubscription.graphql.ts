/**
 * @generated SignedSource<<d1f4c21ebf3b85b639c7ff17beee84ca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, GraphQLSubscription } from 'relay-runtime';
export type ChatCompletionMessageRole = "AI" | "SYSTEM" | "TOOL" | "USER";
export type GenerativeProviderKey = "ANTHROPIC" | "AZURE_OPENAI" | "OPENAI";
export type ChatCompletionMessageInput = {
  content: any;
  role: ChatCompletionMessageRole;
};
export type GenerativeModelInput = {
  name: string;
  providerKey: GenerativeProviderKey;
};
export type InvocationParameters = {
  maxCompletionTokens?: number | null;
  maxTokens?: number | null;
  seed?: number | null;
  stop?: ReadonlyArray<string> | null;
  temperature?: number | null;
  toolChoice?: any | null;
  topP?: number | null;
};
export type PlaygroundOutputSubscription$variables = {
  apiKey?: string | null;
  invocationParameters: InvocationParameters;
  messages: ReadonlyArray<ChatCompletionMessageInput>;
  model: GenerativeModelInput;
  tools?: ReadonlyArray<any> | null;
};
export type PlaygroundOutputSubscription$data = {
  readonly chatCompletion: {
    readonly __typename: "TextChunk";
    readonly content: string;
  } | {
    readonly __typename: "ToolCallChunk";
    readonly function: {
      readonly arguments: string;
      readonly name: string;
    };
    readonly id: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
};
export type PlaygroundOutputSubscription = {
  response: PlaygroundOutputSubscription$data;
  variables: PlaygroundOutputSubscription$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "apiKey"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "invocationParameters"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "messages"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "model"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "tools"
},
v5 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "apiKey",
            "variableName": "apiKey"
          },
          {
            "kind": "Variable",
            "name": "invocationParameters",
            "variableName": "invocationParameters"
          },
          {
            "kind": "Variable",
            "name": "messages",
            "variableName": "messages"
          },
          {
            "kind": "Variable",
            "name": "model",
            "variableName": "model"
          },
          {
            "kind": "Variable",
            "name": "tools",
            "variableName": "tools"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": null,
    "kind": "LinkedField",
    "name": "chatCompletion",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "__typename",
        "storageKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
            "storageKey": null
          }
        ],
        "type": "TextChunk",
        "abstractKey": null
      },
      {
        "kind": "InlineFragment",
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "FunctionCallChunk",
            "kind": "LinkedField",
            "name": "function",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "arguments",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "type": "ToolCallChunk",
        "abstractKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PlaygroundOutputSubscription",
    "selections": (v5/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v3/*: any*/),
      (v1/*: any*/),
      (v4/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "PlaygroundOutputSubscription",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "924d84f911c5156af0abb2a371d098f2",
    "id": null,
    "metadata": {},
    "name": "PlaygroundOutputSubscription",
    "operationKind": "subscription",
    "text": "subscription PlaygroundOutputSubscription(\n  $messages: [ChatCompletionMessageInput!]!\n  $model: GenerativeModelInput!\n  $invocationParameters: InvocationParameters!\n  $tools: [JSON!]\n  $apiKey: String\n) {\n  chatCompletion(input: {messages: $messages, model: $model, invocationParameters: $invocationParameters, tools: $tools, apiKey: $apiKey}) {\n    __typename\n    ... on TextChunk {\n      content\n    }\n    ... on ToolCallChunk {\n      id\n      function {\n        name\n        arguments\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "30b9973d6ea69054a907549af97c0e5f";

export default node;

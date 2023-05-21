/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parser.ts TAP subtest-confusing.tap > output bail=false 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 - a brace looks like this {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: a brace looks like this\\n",
      ],
      Array [
        "line",
        "# Subtest: x\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: x\\n",
          ],
          Array [
            "line",
            "# Subtest: y\\n",
          ],
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "a brace looks like this x",
              "id": 1,
              "name": "ypoint",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 1,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 1,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "time": null,
              "todo": 0,
            },
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: y\\n",
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "a brace looks like this",
          "id": 1,
          "name": "y",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: x\\n",
  ],
  Array [
    "line",
    "        # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "a brace looks like this x",
      "id": 1,
      "name": "ypoint",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "a brace looks like this x",
      "id": 1,
      "name": "ypoint",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "a brace looks like this",
      "id": 1,
      "name": "y",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "a brace looks like this",
      "id": 1,
      "name": "y",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "a brace looks like this",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "ok 2 - x\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "x",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "x",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "x",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

exports[`test/parser.ts TAP subtest-confusing.tap > output bail=true 1`] = `
Array [
  Array [
    "line",
    "TAP version 13\\n",
  ],
  Array [
    "version",
    13,
  ],
  Array [
    "line",
    "ok 1 - a brace looks like this {\\n",
  ],
  Array [
    "child",
    Array [
      Array [
        "comment",
        "# Subtest: a brace looks like this\\n",
      ],
      Array [
        "line",
        "# Subtest: x\\n",
      ],
      Array [
        "child",
        Array [
          Array [
            "comment",
            "# Subtest: x\\n",
          ],
          Array [
            "line",
            "# Subtest: y\\n",
          ],
          Array [
            "comment",
            "# Subtest: y\\n",
          ],
          Array [
            "line",
            "ok 1 - ypoint\\n",
          ],
          Array [
            "assert",
            Result {
              "buffered": false,
              "diag": null,
              "fullname": "a brace looks like this x",
              "id": 1,
              "name": "ypoint",
              "ok": true,
              "plan": null,
              "previous": null,
              "skip": false,
              "tapError": null,
              "time": null,
              "todo": false,
            },
          ],
          Array [
            "line",
            "1..1\\n",
          ],
          Array [
            "plan",
            Plan {
              "comment": "",
              "end": 1,
              "start": 1,
            },
          ],
          Array [
            "complete",
            FinalResults {
              "bailout": false,
              "count": 1,
              "fail": 0,
              "failures": Array [],
              "ok": true,
              "pass": 1,
              "plan": FinalPlan {
                "comment": "",
                "end": 1,
                "skipAll": false,
                "skipReason": "",
                "start": 1,
              },
              "skip": 0,
              "time": null,
              "todo": 0,
            },
          ],
          Array [
            "close",
          ],
        ],
      ],
      Array [
        "line",
        "    # Subtest: y\\n",
      ],
      Array [
        "line",
        "    ok 1 - ypoint\\n",
      ],
      Array [
        "line",
        "    1..1\\n",
      ],
      Array [
        "line",
        "ok 1 - y\\n",
      ],
      Array [
        "assert",
        Result {
          "buffered": false,
          "diag": null,
          "fullname": "a brace looks like this",
          "id": 1,
          "name": "y",
          "ok": true,
          "plan": null,
          "previous": null,
          "skip": false,
          "tapError": null,
          "time": null,
          "todo": false,
        },
      ],
      Array [
        "line",
        "1..1\\n",
      ],
      Array [
        "plan",
        Plan {
          "comment": "",
          "end": 1,
          "start": 1,
        },
      ],
      Array [
        "complete",
        FinalResults {
          "bailout": false,
          "count": 1,
          "fail": 0,
          "failures": Array [],
          "ok": true,
          "pass": 1,
          "plan": FinalPlan {
            "comment": "",
            "end": 1,
            "skipAll": false,
            "skipReason": "",
            "start": 1,
          },
          "skip": 0,
          "time": null,
          "todo": 0,
        },
      ],
      Array [
        "close",
      ],
    ],
  ],
  Array [
    "line",
    "    # Subtest: x\\n",
  ],
  Array [
    "line",
    "        # Subtest: y\\n",
  ],
  Array [
    "line",
    "        ok 1 - ypoint\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "a brace looks like this x",
      "id": 1,
      "name": "ypoint",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "a brace looks like this x",
      "id": 1,
      "name": "ypoint",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "        1..1\\n",
  ],
  Array [
    "line",
    "    ok 1 - y\\n",
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "a brace looks like this",
      "id": 1,
      "name": "y",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "a brace looks like this",
      "id": 1,
      "name": "y",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "    1..1\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": true,
      "diag": null,
      "fullname": "",
      "id": 1,
      "name": "a brace looks like this",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "ok 2 - x\\n",
  ],
  Array [
    "assert",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "x",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "result",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "x",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "pass",
    Result {
      "buffered": false,
      "diag": null,
      "fullname": "",
      "id": 2,
      "name": "x",
      "ok": true,
      "plan": null,
      "previous": null,
      "skip": false,
      "tapError": null,
      "time": null,
      "todo": false,
    },
  ],
  Array [
    "line",
    "1..2\\n",
  ],
  Array [
    "plan",
    Plan {
      "comment": "",
      "end": 2,
      "start": 1,
    },
  ],
  Array [
    "complete",
    FinalResults {
      "bailout": false,
      "count": 2,
      "fail": 0,
      "failures": Array [],
      "ok": true,
      "pass": 2,
      "plan": FinalPlan {
        "comment": "",
        "end": 2,
        "skipAll": false,
        "skipReason": "",
        "start": 1,
      },
      "skip": 0,
      "time": null,
      "todo": 0,
    },
  ],
]
`

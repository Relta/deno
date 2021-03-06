// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
import { assertThrows, unitTest } from "./test_util.ts";

unitTest(function testFnOverloading(): void {
  // just verifying that you can use this test definition syntax
  Deno.test("test fn overloading", (): void => {});
});

unitTest(function nameOfTestCaseCantBeEmpty(): void {
  assertThrows(
    () => {
      Deno.test("", () => {});
    },
    Error,
    "The name of test case can't be empty"
  );
  assertThrows(
    () => {
      Deno.test({
        name: "",
        fn: () => {}
      });
    },
    Error,
    "The name of test case can't be empty"
  );
});

unitTest(function testFnCantBeAnonymous(): void {
  assertThrows(
    () => {
      Deno.test(function() {});
    },
    Error,
    "Test function can't be anonymous"
  );
});

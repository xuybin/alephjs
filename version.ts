/** `VERSION` managed by https://deno.land/x/publish */
export const VERSION = "1.0.0-alpha.78.1";

/** The flag indicates that the version is canary version. */
export const isCanary = false;

/** `prepublish` will be invoked before publish */
export async function prepublish(version: string) {
  const readme = await Deno.readTextFile("./README.md");

  await Deno.writeTextFile(
    "./README.md",
    readme.replace(
      /\/\/deno\.land\/x\/alephjs@[a-z\d\.\-]+\//,
      `//deno.land/x/alephjs@${version}/`,
    ),
  );
}

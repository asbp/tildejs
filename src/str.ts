import u_conditionable from "./conditionable";
import u_tof from "./tof";

const u_str = (() => {
  const empty = (str: string) => str.length < 1;

  const uncertainStr = (str?: string) => String(str);

  const explode = (str: string, delimiter: string) => str.split(delimiter);

  const before = (subject: string, search: string) =>
    explode(subject, search).shift();
  const after = (subject: string, search: string) =>
    explode(subject, search).reverse().shift();

  const afterLast = (subject: string, search: string) => {
    if (empty(search)) return subject;

    const position = subject.lastIndexOf(search);

    if (u_tof.falsy(position)) return subject;

    return subject.substring(position + 1);
  };

  const betweenFirst = (subject: string, from: string, to: string) =>
    before(uncertainStr(after(subject, from)), to);

  const mask = (subject: string, substitute: string, start = 0, length = 0) => {
    start = u_conditionable.unless(
      start > 0,
      () => (start = subject.length + start),
      () => start
    );
    const end = u_conditionable.when(
      length > 0,
      () => start + length,
      () => start + subject.length
    );

    return subject
      .substring(0, start)
      .concat(substitute.repeat(subject.substring(start, end).length))
      .concat(subject.substring(end, subject.length));
  };

  const exported = {
    empty,
    uncertainStr,
    before,
    after,
    afterLast,
    betweenFirst,
    mask,
  };

  return exported;
})();

export default u_str;

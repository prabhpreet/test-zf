import { useForm } from "@modular-forms/preact";
export type GitURL = {
  gitUrl: string;
};
export default function TestForm() {
  const [f, F] = useForm<GitURL>();

  return (
    <>
      Hello
      <F.Form onSubmit={(v, e) => {}}>
        <F.Field name="gitUrl">
          {(field, props) => <input {...props} type="text" />}
        </F.Field>
      </F.Form>
      End
    </>
  );
}

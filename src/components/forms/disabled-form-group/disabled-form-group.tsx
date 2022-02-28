import 'twin.macro';
import { Field } from 'formik';

interface Field {
  label: React.ReactNode;
  name: string;
}

interface Props {
  fields: Field[];
}

export const DisabledFormGroup = ({ fields }: Props) => (
  <div tw="space-y-6 p-6 border border-monochrome-dark rounded text-14 leading-20">
    {fields.map(({ label, name }) => (
      <div key={name}>
        <div tw="mb-2 text-monochrome-medium-tint font-bold">{label}</div>
        <Field name={name}>
          {({ field }: any) => <div tw="text-14 text-monochrome-dark-tint">{field?.value}</div>}
        </Field>
      </div>
    ))}
  </div>
);

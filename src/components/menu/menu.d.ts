import { Icons } from '../icon';

interface MenuItemType {
  label: string;
  icon: keyof typeof Icons;
  onClick: () => void;
  Content?: (props: {
    children: JSX.Element;
  }) => JSX.Element;
}
interface Props {
  items: MenuItemType[];
  bordered?: boolean;
  testContext?: string;
}
export declare const Menu: {
  ({ items, bordered, testContext }: Props): JSX.Element;
  displayName: string;
  __docgenInfo: {
    description: string;
    displayName: string;
    props: {
      items: {
        defaultValue: null;
        description: string;
        name: string;
        required: boolean;
        type: {
          name: string;
        };
      };
      bordered: {
        defaultValue: null;
        description: string;
        name: string;
        required: boolean;
        type: {
          name: string;
        };
      };
      testContext: {
        defaultValue: {
          value: string;
        };
        description: string;
        name: string;
        required: boolean;
        type: {
          name: string;
        };
      };
    };
  };
};
export {};

// @ts-ignore
import MiddleEllipsis from 'react-middle-ellipsis';
import Highlighter from 'react-highlight-words';
import ReactDOM from 'react-dom';

export {
  Field, Form, Formik, FieldInputProps, useFormikContext, FormikProps, ErrorMessage, useField,
} from 'formik';
export {
  Badge,
  Icons,
  Modal,
  Spinner,
  Tooltip,
  Tab,
  Menu,
  Panel,
  Portal,
  MainProgressBar,
  AdditionalProgressBar,
  StripedProgressBar,
  ProgressBarLegends,
  SessionIndicator,
  SortArrow,
  Legend,
  Status,
  Stub,
  FormGroup,
  DarkFormGroup,
  Inputs,
  Button,
  LinkButton,
  CancelButton,
  NegativeActionButton,
  Checkbox,
  Fields,
  handleFieldErrors,
  required,
  composeValidators,
  correctPattern,
  numericLimits,
  positiveInteger,
  requiredArray,
  sizeLimit,
  toError,
  Table,
  VirtualizedTable,
  TableElements,
  Cells,
  TableActionsProvider,
  setSearch,
  setSort,
  useTableActionsState,
  useTableActionsDispatch,
  Dropdown,
  FormValidator,
  idValidator,
  DisabledFormGroup,
  alreadyExist,
  SearchPanel,
  Popover,
  Skeleton,
  PercentageBar,
  CopyButton,
  SystemAlert,
  ContentAlert,
  Autocomplete,
  MultipleSelectAutocomplete,
  LightDropdown,
  HeadlessSelect,
} from './components';
export {
  useClickOutside, useElementSize, useHover, usePreserveCaretPosition,
  useRunAfterUpdate, useQueryParams, useIntersection, useGeneralAlertMessage, useCloseModal, useCopy,
} from './hooks';

export const Typography = {
  MiddleEllipsis,
  Highlighter,
};

export const Modules = {
  ReactDOM,
};
export * from './utils';
export { sendAlertEvent, IAlert } from './send-alert-event';

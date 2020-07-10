export interface Message {
  type: 'SUCCESS' | 'ERROR' | 'WARNING' | 'INFO';
  text: React.ReactNode;
}

export interface engineProps {
  name: string;
  key: string;

  method: 'GET' | 'POST';
  action: string;

  icon: React.FC;

  input: inputProps;
}

export interface inputProps {
  primary: {
    name: string;
    placeholder: string;
  };
  other?: React.FC;
}

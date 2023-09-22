/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PropsType<T> {
  props: T;
}

class Component<PropsType> {
  constructor(public props: PropsType) {}
}

interface PagePropsType extends PropsType<string> {
  title: string;
}

class Page extends Component<PagePropsType> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};

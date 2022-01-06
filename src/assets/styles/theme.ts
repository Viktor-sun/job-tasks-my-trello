interface ITheme {
  colors: {
    titleColor: string;
    accentColor: string;
    textColor: string;
    backgroundColor: string;
    backgroundOption: string;
  };
}

const theme: ITheme = {
  colors: {
    titleColor: "#212121",
    accentColor: "#2196f3",
    textColor: "#757575",
    backgroundColor: "#f7fff2",
    backgroundOption: "#369",
  },
};

export { theme };

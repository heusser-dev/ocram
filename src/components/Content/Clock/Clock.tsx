import React from 'react';

interface Props {}

interface State {
  hora: Date;
}

class Reloj extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hora: new Date() };
    this.intervalID = setInterval(() => this.actualizarHora(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  intervalID: NodeJS.Timeout;

  actualizarHora() {
    this.setState({
      hora: new Date()
    });
  }

  render() {
    return (
      <div className="md:fixed md:flex fixed text-base pl-2 md:text-lg md:top-0 top-2 right-1 bg-white rounded-2xl mt-1 dark:bg-custom-blue  dark:text-white hover:scale-125 transform transition-transform duration-300 ">
        <h1>{this.state.hora.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Reloj;

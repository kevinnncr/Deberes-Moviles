import { Component } from "react";

interface ProductionState {
  Status: string;
}

class ProductionStatus extends Component<{}, ProductionState> {
  interval: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      Status: "En espera",
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const newStatus = this.state.Status === "En espera" ? "En proceso" : "En el horno";
      this.setState({ Status: newStatus });
    }, 3000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div>
        <h2>Estado de Producción de Pan:</h2>
        <p>{this.state.Status}</p>
      </div>
    );
  }
}

export default ProductionStatus;

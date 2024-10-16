"use client";
import React, { Component } from "react";
import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount() {
    // Delay the CrispChat initialization by 6000 milliseconds
    setTimeout(() => {
      Crisp.configure("75004ba3-b168-4d23-ae79-2aa03e9b7f7c");
    }, 5000);
  }

  render() {
    return null; // No UI rendering for this component
  }
}

export default CrispChat;

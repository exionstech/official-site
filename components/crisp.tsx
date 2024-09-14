"use client";
import React, { Component } from "react";

import { Crisp } from "crisp-sdk-web";

class CrispChat extends Component {
  componentDidMount() {
    Crisp.configure("75004ba3-b168-4d23-ae79-2aa03e9b7f7c");
  }
  
  render() {
    return null;
  }
}
export default CrispChat;

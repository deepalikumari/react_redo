import React, { Component } from "react";

export default class HigherOrderFunction extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: "1", name: "Joe", user_type: "Developer", age: 31, years: 11 },
        { id: "2", name: "Hill", user_type: "Designer", age: 26, years: 4 },
        { id: "3", name: "John", user_type: "Teacher", age: 24, years: 2 },
        { id: "4", name: "Sam", user_type: "Entrepreneur", age: 58, years: 25 },
        { id: "5", name: "Jack", user_type: "Designer", age: 43, years: 18 },
      ],
    };
  }

  fulldata = () => {
    return (
      <ul>
        {this.state.userData.map((user) => {
          return (
            <li key={user.id}>
              Id: {user.id} &ensp; Name: {user.name} &ensp; User Type: {user.user_type}
            </li>
          );
        })}
      </ul>
    );
  };


  designerData = () => {
    const designerData = this.state.userData.filter(
      (user) => user.user_type === "Designer"
    );

    return (
      <ul>
        {designerData.map((user) => (
          <li key={user.id}>
            Id: {user.id} &ensp; Name: {user.name} &ensp; User Type: {user.user_type}
          </li>
        ))}
      </ul>
    );
  };


  jData = () => {
    const jData = this.state.userData.filter(
      (user) => user.name.charAt(0).toUpperCase() === "J"
    );

    return (
      <ul>
        {jData.map((user) => (
          <li key={user.id}>
            Id: {user.id} &ensp; Name: {user.name} &ensp; User Type: {user.user_type}
          </li>
        ))}
      </ul>
    );
  };


  ageData = () => {
    const ageData = this.state.userData.filter(
        (user) => user.age > 28 && user.age <= 50
      );

    return (
    <ul>
        {ageData.map((user) => (
        <li key={user.id}>
            Id: {user.id} &ensp; Name: {user.name} &ensp; User Type: {user.user_type}
        </li>
        ))}
    </ul>
    );
  }

  expdata = () => {
    const designerData = this.state.userData.filter(
        (user) => user.user_type === "Designer"
      );
  
      const totalExperience = designerData.reduce(
        (acc, designer) => acc + designer.years,
        0
      );
  
      return <span>{totalExperience}</span>;
  }

  render() {
    return (
      <>
        <h1>Display all items</h1>
        {this.fulldata()}

        <h1>Display based on user type</h1>
        {this.designerData()}

        <h1>Filter all data starting with letter J</h1>
        {this.jData()}

        <h1>
          Filter all data based on age greater than 28 and age less than or
          equal to 50
        </h1>
        {this.ageData()}

        <h1>Find the total years of the designers</h1>
        {this.expdata()}

      </>
    );
  }
}
import React from "react";
import styled from "styled-components";

const CreateProjectWrapper = styled.div`
  font-family: "Poppins";
  all: none;
  grid-template-columns: 1fr;
  grid-template-rows: 30px auto;
  padding: 1rem 0;
  width: 50%;
  display: grid;
  margin: auto;
  justify-self: center;

  grid-template-areas:
    "title"
    "form";
  > h3:nth-of-type(1) {
    margin: 0;
    padding: 0;
    grid-area: title;
    color: #27ae60;
    font-size: 1.3rem;
    font-weight: 300;
    > span {
      font-weight: 800;
    }
  }
  > form:nth-of-type(1) {
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
    grid-area: form;
    border-radius: 5px;
    justify-self: center;
    display: grid;
    width: max-content;
    grid-template-rows: repeat(auto-fill, minmax(auto, 250px));
    grid-auto-flow: dense;
    select {
      display: block;
      box-sizing: border-box;
      line-height: 1.3;
      margin: 8px 4px;
      appearance: none;
      outline: none;
      border: none;
      background: #00bdaa;
      position: relative;
      border-bottom: 1px solid #1eb2a6;
      padding: 0.6em 1.4em 0.5em 0.8em;
      &::after {
        position: absolute;
        width: 0;
        height: 0;
        border: 7px solid transparent;
        background: #00bdaa;
        content: "";
      }
      &:active {
        background-color: #000;
      }
    }

    div {
      border: none;
      background: #d4f8e8;
      border-radius: 5px;
      display: inline-block;
      box-sizing: border-box;
      grid-auto-flow: dense;
      display: block;
      width: max-content;
      margin: 1rem;
      flex-wrap: wrap;
      > textarea {
        display: inline-block;
        padding: 0;
        outline: none;
        resize: none;
        background: transparent;
        border: none;
        border-bottom: 1px solid #1eb2a6;
        border-radius: 5px;
        font-size: 0.9rem;
        font-size: 0.9rem;
      }
      > input[type="text"] {
        display: inline-block;
        font-size: 0.9rem;
        border-radius: 5px;
        background: transparent;
        border: none;
        border-bottom: 1px solid #1eb2a6;
        outline: none;
      }
      > legend {
        font-weight: 700;
        color: #400082;
        position: absolute;
        transform: translateY(-12px);
      }
    }
    > div:nth-of-type(1) {
      display: grid;
      grid-template-columns: min-content 1fr auto;
      grid-template-rows: 1fr;
      height: auto;
      overflow: hidden;
      > input[type="text"] {
        padding: 0 1rem;
        height: auto;
        grid-column: 1 / span 1;
        &::placeholder {
          text-align: center;
          margin: auto;
          vertical-align: center;
        }
      }
      > textarea {
        grid-column: 2 / span 1;
        box-sizing: border-box;
        padding: 1rem;
        display: flex;
        position: relative;

        &::placeholder {
          text-align: center;
        }
      }
      > section {
        display: grid;
        align-content: center;
      }
    }
    > div:nth-of-type(2) {
      display: flex;
      justify-items: stretch;
      > input[type="text"] {
        padding: 0 1rem;
      }
    }
  }
`;

const CreateProject = () => {
  return (
    <CreateProjectWrapper>
      <h3>
        <span>new</span> project
      </h3>
      <form>
        <div>
          <legend>General:</legend>
          <input
            type="text"
            id="projectName"
            name="projectName"
            placeholder="project name"
          />
          <textarea
            name="overview"
            id="overview"
            cols="30"
            rows="5"
            placeholder="project overview"
          />
          <section>
            <select>
              <option value="category">Category</option>
              <option value="automotive">Incubator</option>
              <option value="bank">Accelerators</option>
              <option value="bank">Co-working space</option>
            </select>

            <select>
              <option value="industry">Industry</option>
              <option value="automotive">Automotive</option>
              <option value="bank">Bank</option>
            </select>

            <select>
              <option value="industry">Verticals</option>
              <option value="automotive">Nano Technology</option>
              <option value="bank">Pet Technology</option>
            </select>
          </section>
        </div>
        <div>
          <legend>Team members:</legend>

          <input
            type="text"
            id="Add Members"
            placeholder="add members"
            name="addMembers"
          />

          <select>
            <option value="Status">status</option>
            <option value="Active">Nano Technology</option>
            <option value="On-hold">Pet Technology</option>
          </select>

          <select>
            <option value="Type">Type</option>
            <option value="Hackathon">Hackathon</option>
            <option value="Startup">Startup</option>
          </select>

          <select>
            <option value="Stage">Stage</option>
            <option value="Prototype">Prototype</option>
            <option value="Scale-up">Scale-up</option>
          </select>
        </div>
        <div>
          <legend>External links:</legend>
          <input type="text" />
          <select>
            <option value="selectMedia">Select media</option>
            <option value="Facebook">Youtube</option>
            <option value="Scale-up">Instagram</option>
          </select>
        </div>
        <div>
          <legend>Associate lab:</legend>
          <input
            type="text"
            id="associateLab"
            name="associateLab"
            placeholder="associate lab"
          />
          <input type="radio" name="projectStatus" value="public" />
          <label htmlFor="public">public</label>
          <input type="radio" name="projectStatus" value="private" />
          <label htmlFor="public">private</label>
        </div>
      </form>
    </CreateProjectWrapper>
  );
};

export default CreateProject;

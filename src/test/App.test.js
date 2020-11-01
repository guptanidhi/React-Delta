import React from "react";
import { mount } from "enzyme";
import App from "../App";
import CustomNavbar from '../components/Navbar';
import SearchSection from '../components/SearchSection';
import CustomSlider from '../components/Slider';

describe('App Component', () => {
	let wrapper;

	beforeAll(() => {
		wrapper = mount(<App />);
	})

	it("renders", () => {		
		expect(wrapper).toBeTruthy();
	});
	
	it("renders Navbar component", () => {
		const navBar = wrapper.find(CustomNavbar)
		expect(navBar).toBeTruthy();
	});
	
	it("renders Search Section component", () => {
		const searchSection = wrapper.find(SearchSection)
		expect(searchSection).toBeTruthy();
	});

	it("renders CustomSlider component", () => {
		const customSlider = wrapper.find(CustomSlider)
		expect(customSlider).toBeTruthy();
	});
	
	it("snapshot Testing", () => {
		const component = mount(<App />);
		expect(component).toMatchSnapshot();
	});
})

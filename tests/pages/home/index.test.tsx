import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from '@/pages/home';
import { genreData, newsData } from "../../data/data";


describe('Home Page', () => {
  it('Should render properly', () => {
    const res = [genreData, newsData];

    render(<HomePage res={res} />);

    const tvLink = screen.getByRole('link', { name: /scrutiny tv/i });
    const tvLinkText = "Scrutiny Tv";
    expect(tvLink).toHaveTextContent(tvLinkText);
  })
})

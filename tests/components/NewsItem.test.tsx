import React from "react";
import { TextEncoder } from 'util';
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewsItem from "@/components/NewsItem";
import { newsData } from "../data/data";


describe('News Item', () => {


  it('should render the news item', () => {
    render(<NewsItem payload={newsData.data.newsPageCollection.items[0]} main={false} />);
    expect(screen.getByText('Test News')).toBeInTheDocument();
  });

  it('should not contain news image when trending is set to true', () => {
    const { queryByAltText } = render(<NewsItem payload={newsData.data.newsPageCollection.items[0]} trending={true} main={false} />);
    const image = queryByAltText('Test News');
    expect(image).toBeNull();
  })
  it('should contain news image when trending is set to false', () => {
    const { queryByAltText } = render(<NewsItem payload={newsData.data.newsPageCollection.items[0]} main={false} />);
    const image = queryByAltText('Test News');
    expect(image).toBeInTheDocument()
  })

});
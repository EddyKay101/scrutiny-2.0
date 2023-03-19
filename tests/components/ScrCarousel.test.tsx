import React from "react";
import { TextEncoder } from 'util';
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ScrCarousel } from "@/components/Carousel/ScrCarousel";
import { genreData } from "../data/data";


describe('ScrCarousel', () => {
  const data = {
    allGenres: {
      items: [
        {
          genre: { tag: 'Comedy' },
          image: { url: 'http://example.com/image.jpg' },
          genreVideo: { url: 'http://example.com/video.mp4' },
        },
        {
          genre: { tag: 'Action' },
          image: { url: 'http://example.com/image.jpg' },
          genreVideo: null,
        },
      ],
    },
  };

  // it('should render the carousel items', () => {
  //   const { container } = render(<ScrCarousel data={data} />);
  //   expect(container.children).toHaveClass('tag');
  //   // expect(screen.getByText('Action')).toBeInTheDocument();
  // });

  it('should show the video overlay on hover', () => {
    render(<ScrCarousel data={data} />);
    const list = screen.getByRole("dialog", {
      name: /comedy/i
    });
    expect(list).toBeInTheDocument();
    // const item = screen.getAllByRole('listitem')[0];
    // const image = item.querySelector('.item__image');
    // const overlay = item.querySelector('.item__video-player-overlay');

    // expect(overlay.classList.contains('show')).toBe(false);

    // // Trigger mouseenter event on the first carousel item
    // image.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));

    // expect(overlay.classList.contains('show')).toBe(true);

    // // Trigger mouseleave event on the first carousel item
    // image.dispatchEvent(new MouseEvent('mouseleave', { bubbles: true }));

    // expect(overlay.classList.contains('show')).toBe(false);
  });
});
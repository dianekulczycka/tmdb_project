import React, {FC} from 'react';
import {IGenre} from "@/app/interfaces/IGenre";
import PosterComponent from "@/app/components/MoviesListComponent/MovieCardComponent/PosterComponent/PosterComponent";
import GenreBadgesComponent
    from "@/app/components/MoviesListComponent/MovieExtendedComponent/PosterWithBadgesComponent/GenreBadgesComponent/GenreBadgesComponent";

interface IProps {
    genres: IGenre[],
    posterPath: string,
}

const PosterWithBadgesComponent: FC<IProps> = ({genres, posterPath}) => {
    return (
        <div className="badges-container cursor-pointer">
            <GenreBadgesComponent genres={genres}/>
            <PosterComponent posterPath={posterPath}/>
        </div>
    );
};

export default PosterWithBadgesComponent;
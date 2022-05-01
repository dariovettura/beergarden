import React from "react";
import Image from 'next/image'

import Link from 'next/link'


interface Props {

	item?: any,

}

const Card: React.FC<Props> = ({  item }) => {


	return (
		<li className={`card`}>
			<Link href={`/${item?.id}`} scroll={false} >
				<a>
					<div
						className="card-content-container">
						<div className="card-content">
							<div className="card-image-container"    >
								<Image layout="fill" width={1000}
			height={1000} className="card-image" src={item?.acf?.anteprima ? item?.acf?.anteprima : ""} alt="" />
							</div>
						</div>
						{/* <div className="title-container"   >
							<span className="category">
								{item?._embedded["wp:term"][0][0]?.name}
							</span>
							<h2>{item?.title?.rendered}</h2>
						</div> */}
					</div>

				</a>
			</Link>

		</li>
	);
}

export default Card;
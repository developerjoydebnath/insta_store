import React from 'react';

import { useParams } from 'react-router-dom';
import FirstDiv from '../../components/ui/FirstDiv';
import Pagination from '../../components/ui/Pagination';
import Ratings from '../../components/ui/Ratings';
import Review from '../../components/ui/Review';
import SecondDiv from '../../components/ui/SecondDiv';
import Specification from '../../components/ui/Specification';
import ThirdDiv from '../../components/ui/ThirdDiv';

const ProductDetail = () => {
    const { productId } = useParams();
    return (
        <div className="mx-3 mt-10">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid md:grid-cols-12 grid-cols-1 border-b border-dashed mb-5 pb-4">
                    <FirstDiv />
                    <div className="lg:col-span-8 md:col-span-7">
                        <div className="grid grid-cols-8">
                            <SecondDiv />
                            <ThirdDiv />
                        </div>
                    </div>
                </div>
                <div>
                    <Specification />
                </div>
                <div>
                    <Ratings />
                </div>
                <div>
                    <Review />
                </div>
                <div>
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;

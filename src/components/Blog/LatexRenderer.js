import { useEffect } from 'react';
import { renderMathInDocument } from '../../utils/mathlive';

const LatexRenderer = ({ latexContent }) => {
    useEffect(() => {
        renderMathInDocument();
    }, []);

    return <div dangerouslySetInnerHTML={{ __html: latexContent }} />
};

export default LatexRenderer;

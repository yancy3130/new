'use strict';

import Base from '../../app/base';
import Uri from '../../app/uri';
import Cookie from '../../lib/cookie';

class HelpDetail extends Base{
    constructor(config){
        super(config);

        this._bind();
        this._getData();
    }

    _bind() {
        $('.J_GoBack').on('touchend', () => {
            window.history.back();
            return false;
        })
    }

    _getData() {
        this.ajax({
            url: '/v1/article/detail/',
            data: {
                access_token: Cookie.get('token'),
                article_id: new Uri().getParam('article-id'),
                type: 'help'
            }
        }).then(data => {
            data = data.data;
            this._setTitle(data.title);
            $('.J_Content').html(data.content)
        })
    }

    _setTitle(title) {
        $('h1', '#J_Header').text(title)
    }
}

new HelpDetail();
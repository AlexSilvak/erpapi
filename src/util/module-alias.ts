import 'module-alias/register';
import * as path from 'path';

const files = path.resolve(__dirname, '../..');
import moduleAlias from 'module-alias';

moduleAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test')
});

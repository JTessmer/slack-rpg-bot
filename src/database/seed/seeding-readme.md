# Seeding

## Info

Seeds are used by Prisma to populate predefined information into the database, such as equipment and abilities.

## Warning

The seed scripts are executed by Prisma directly with ts-node, and are not able to interpret path aliases, such as:

```javascript
import { logger } from '~/util/logger'
```

In effect, this means that all seed scripts must import using explicit relative paths:

```javascript
import { logger } from '../../../util/logger'
```
